// import React, {useState} from "react";


import React, {useState , useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { loadBlockchain } from '../../redux/slices/web3ConnectSlice'


import './Minting.css';
import MintGenesis from '../../assets/imgs/4.gif';
import IncDecCounter from '../IncDecCounter/IncDecCounter';
import CharacterMint from '../../assets/imgs/Charactermint.gif';




function Minting(){
    
    const qtyNFT1            = useRef();
    const qtyNFT2            = useRef();
    const qtyNFT3            = useRef();
    
    const [maxAllow]        = useState(1111);
    const [contractAddress] = useState('0XD4F11C30078D352354C0B17EAA8076C825416493');

    const dispatch = useAppDispatch()
    const { web3, accounts, contract,web3LoadingErrorMessage } = useAppSelector((state) => state.web3Connect)



    const handleMetamask = () => {
        dispatch(loadBlockchain());
        if(web3LoadingErrorMessage){
            alert(web3LoadingErrorMessage);
        }
    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        // Submit the form data here
    }

    async function mint1() {
        try {
            const amount1           = qtyNFT1.current.value;
            const publicSalePrice1  = Number(await contract.methods.PUBLIC_SALE_PRICE().call());
            var totalAmount1        = publicSalePrice1 * amount1;
            // console.log("amount1",amount1);
            // console.log("publicSalePrice1", publicSalePrice1);

            await contract.methods.mint(amount1).send({ from: accounts[0], value:String(totalAmount1) });
        } catch (error) {
            console.error(error);
        }
    }

    async function mint2() {
        try {
            const amount2            = qtyNFT2.current.value;
            const publicSalePrice2   = Number(await contract.methods.PUBLIC_SALE_PRICE().call());
            var totalAmount2         = publicSalePrice2 * amount2;
            // console.log("amount2",amount2);
            // console.log("publicSalePrice2", publicSalePrice2);
            await contract.methods.mint(amount2).send({ from: accounts[0], value:String(totalAmount2) });
        } catch (error) {
            console.error(error);
        }
    }

    async function mint3() {
        try {
            const amount3            = qtyNFT3.current.value;
            const publicSalePrice3   = Number(await contract.methods.PUBLIC_SALE_PRICE().call());
            var totalAmount3         = publicSalePrice3 * amount3;
            // console.log("amount3",amount3);
            // console.log("publicSalePrice3", publicSalePrice3);
            await contract.methods.mint(amount3).send({ from: accounts[0], value:String(totalAmount3) });
        } catch (error) {
            console.error(error);
        }
    }

  
    
    return(
        <>
        <section className="mintingContent">
            <div className="container">
                <div className="mintingContentArea">
                    <h2>Own your part of the Flinch franchise and create with your digital assets.</h2>
                    <p>The Flinch Genesis Pass is your key to the experience. Once you own a pass you will unlock all of the project's utility. Your pass allows you to watch all of the films in our franchise, mint additional assets, stake your assets to earn rewards, partake in the creative process, visit the set, create your character, write and direct films and episodes, get cast as an actor, voice animated characters, come to IRL premieres and parties and so much more. Build popular characters with great stories and films and then sell them on the secondary market. Write epic stories and direct them in the movie studio. This is a decentralized film franchise built by the community. Choose your involvement, get creative. This is the future of cinema.</p>
                </div>
            </div>
        </section>
        <section className="mintCalcSection">
            <div className="container">
                <div className="mintingBlock">
                    <div className="mintThumb">
                        <img src={MintGenesis} alt="Genesis Pass Mint"/>
                    </div>
                    <div className="mintCalculater">
                        <h2>genesis pass mint</h2>
                        {/* <button className="siteButton" onClick={() => mint()}>Get Public price</button> */}
                        <form className="FormMinting" onSubmit={handleSubmit}>
                            <IncDecCounter ref={qtyNFT1} maxAllow={maxAllow}/>
                            {/* <IncDecCounter  ref={inputRef} /> */}
                            <span>MAX MINT AMOUNT: {maxAllow}</span>
                            <div className="totalCost">
                                <span>Total</span> <h3>0.065 ETH<span>+ GAS</span></h3>
                            </div>
                            {
                            web3 ?
                                    <>
                                        <button className="siteButton" onClick={() => mint1()}>Mint</button>
                                    </>
                            :
                                    <>
                                        <button className="siteButton" onClick={() => handleMetamask()}>Connect Wallet</button>
                                    </>
                            }
                        </form>
                    </div>
                    <div className="DescriptionMinting">
                        <h4>Genesis Pass Utility:</h4>
                        <p>Mint and claim other assets - Stake your assets - Create your own cinematic stories - Unlimited visits to the Set - Watch all Flinch films and content - IRL invites to premieres and parties - Earn FLNH coin by staking - Increase all other asset staking rewards</p>
                    </div>
                    <div className="contractAddress"><span>CONTRACT ADDRESS:</span> {contractAddress}</div>
                </div>

            </div>
        </section>
       
        <section className="mintCalcSection CharacterMintSection">
            <div className="container">
                <div className="mintingBlock rightAligned">
                    <div className="mintThumb">
                        <img src={CharacterMint} alt="Character mint"/>
                    </div>
                    <div className="mintCalculater">
                        <h2>Character mint</h2>
                        <form className="FormMinting" onSubmit={handleSubmit}>
                            <IncDecCounter ref={qtyNFT2} maxAllow={maxAllow}/>
                            {/* <IncDecCounter  ref={inputRef} /> */}
                            <span>MAX MINT AMOUNT: {maxAllow}</span>
                            <div className="totalCost">
                                <span>Total</span> <h3>0.065 ETH<span>+ GAS</span></h3>
                            </div>
                            {
                            web3 ?
                                    <>
                                        <button className="siteButton" onClick={() => mint2()}>Mint</button>
                                    </>
                            :
                                    <>
                                        <button className="siteButton" onClick={() => handleMetamask()}>Connect Wallet</button>
                                    </>
                            }
                        </form>
                    </div>
                    <div className="DescriptionMinting">
                        <h4>Genesis Pass Utility:</h4>
                        <p>Mint and claim other assets - Stake your assets - Create your own cinematic stories - Unlimited visits to the Set - Watch all Flinch films and content - IRL invites to premieres and parties - Earn FLNH coin by staking - Increase all other asset staking rewards</p>
                    </div>
                    <div className="contractAddress"><span>CONTRACT ADDRESS:</span> {contractAddress}</div>
                </div>

            </div>
        </section>
          
        <section className="mintCalcSection WeaponMintSection">
            <div className="container">
                <div className="mintingBlock">
                    <div className="mintThumb">
                        <img src={MintGenesis} alt="Genesis Pass Mint"/>
                    </div>
                    <div className="mintCalculater">
                        <h2>genesis pass mint</h2>
                        <form className="FormMinting" onSubmit={handleSubmit}>
                            <IncDecCounter ref={qtyNFT3} maxAllow={maxAllow}/>
                            {/* <IncDecCounter  ref={inputRef} /> */}
                            <span>MAX MINT AMOUNT: {maxAllow}</span>
                            <div className="totalCost">
                                <span>Total</span> <h3>0.065 ETH<span>+ GAS</span></h3>
                            </div>
                            {
                            web3 ?
                                    <>
                                        <button className="siteButton" onClick={() => mint3()}>Mint</button>
                                    </>
                            :
                                    <>
                                        <button className="siteButton" onClick={() => handleMetamask()}>Connect Wallet</button>
                                    </>
                            }
                        </form>
                    </div>
                    <div className="DescriptionMinting">
                        <h4>Genesis Pass Utility:</h4>
                        <p>Mint and claim other assets - Stake your assets - Create your own cinematic stories - Unlimited visits to the Set - Watch all Flinch films and content - IRL invites to premieres and parties - Earn FLNH coin by staking - Increase all other asset staking rewards</p>
                    </div>
                    <div className="contractAddress"><span>CONTRACT ADDRESS:</span> {contractAddress}</div>
                </div>

            </div>
        </section>
         
        </>
    );
}
export default Minting;