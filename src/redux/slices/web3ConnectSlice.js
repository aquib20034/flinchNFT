
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../../contract/contract';
import Web3 from 'web3';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import WalletConnectProvider from '@walletconnect/web3-provider';


// BEGIN :: here
// import React, {useState, useEffect} from "react";
// import { ethers, Contract } from "ethers";
// import Web3Modal from "web3modal";
// END :: here
export const initialState = {
    // web3Modal:null,
    web3: null,
    nft : false,
    balance: 0,
    contract: null,
    accounts: [],
    web3LoadingErrorMessage: null
}

//web3
//contract
//acounts

export const loadBlockchain = createAsyncThunk("loadBlockchain", async (_, thunkAPI) => {
    try {
        //network should be rinkeby
        // console.log("Web3.givenProvider.chainId ", Web3.givenProvider.chainId)
        // if (Web3.givenProvider && Web3.givenProvider.chainId == "0x1") {
        if (Web3.givenProvider) {
            if(Web3.givenProvider.chainId !== "0x1"){
                return {
                    web3LoadingErrorMessage :"Please select mainnet!!"
                }
            }
            await Web3.givenProvider.enable();
            const web3      = new Web3(Web3.givenProvider);
            const contract  = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            const accounts  = await web3.eth.getAccounts();

            console.log(accounts[0]);
            // const adr  = accounts[0];

            const adr  = "0xc6740736699209a730a7e5d9272a094dc3b7a703";
            const balance = await contract.methods.balanceOf(adr).call()
            console.log("balance",balance);
            
            let nft  = false;
            if(balance > 0){
                nft = true;
            }
            return {
                web3,
                nft,
                balance,
                accounts,
                contract
            }
        }else {
            return {
                web3LoadingErrorMessage :"error in connecting wallet!! MetaMask is not installed!!"
            }
        }

    }
    catch (error) {
        console.log("error", error)
    }
})


export const disconnectFromBlockchain = createAsyncThunk("disconnectFromBlockchain", async (_, thunkAPI) => {
    // try {
    //     //network should be rinkeby
    //     // console.log("Web3.givenProvider.chainId ", Web3.givenProvider.chainId)
    //     // if (Web3.givenProvider && Web3.givenProvider.chainId == "0x1") {

    //     if (Web3.givenProvider) {
    //         //  Web3.givenProvider.enable();
    //         console.log(Web3.currentProvider)
    //     }
    

    
    //         // console.log("test");
    //     if (Web3.givenProvider) {
    //         // Web3.givenProvider = null;
    //         // console.log("test1");
    //             // Clear any saved accounts or contract instances
             
    //         return {
    //             web3:null,
    //             accounts:null,
    //             contract:null
    //         }
    //     }else {
    //         return {
    //             web3LoadingErrorMessage :"error in connecting wallet!! MetaMask is not installed!!"
    //         }
    //     }

    // }
    // catch (error) {
    //     console.log("error", error)
    // }
})



export const loadWalletConnect = createAsyncThunk("loadWalletConnect", async (_, thunkAPI) => {
    try {
        
        const provider =  new WalletConnectProvider({
            rpc: {
                4: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            },
            chainId: 4,
        })

        if (provider) {
            await provider.enable();
            const web3 = new Web3(provider);
            console.log("web3", web3)
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            const accounts = await web3.eth.getAccounts();
            return {
                web3,
                accounts,
                contract
            }
        }
        else {
            return {
                web3LoadingErrorMessage: "error in connecting wallet"
            }
        }

    }
    catch (error) {
        console.log("error", error)
    }
})


export const updateAccount = createAsyncThunk("updateAccount", async (data, thunkAPI) => {
    try {
        let accounts =  data
            return {
                accounts,
            }
        }
    
    catch (error) {
        console.log("error", error)
    }
})

const web3ConnectSlice = createSlice({
    name: "Web3Connect",
    initialState,
    reducers: {},
    extraReducers: {
        [loadBlockchain.fulfilled.toString()]: (
            state,
            { payload }
        ) => {
            state.web3 = payload?.web3;
            state.nft = payload?.nft;
            state.balance = payload?.balance;
            state.contract = payload?.contract;
            state.accounts = payload?.accounts;
            state.web3LoadingErrorMessage = payload?.web3LoadingErrorMessage;

        },
        [loadWalletConnect.fulfilled.toString()]: (
            state,
            { payload }
        ) => {
            state.web3 = payload?.web3;
            state.contract = payload?.contract;
            state.accounts = payload?.accounts;

        },
        [updateAccount.fulfilled.toString()]: (
            state,
            { payload }
        ) => {
            state.accounts = payload?.accounts;

        }
    }

});

export const web3Reducer = web3ConnectSlice.reducer;