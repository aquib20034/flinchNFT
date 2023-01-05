// import React from "react";
import React, { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { loadBlockchain,disconnectFromBlockchain, loadWalletConnect } from '../../redux/slices/web3ConnectSlice'

import { Icon } from '@iconify/react';
import logo from '../../assets/imgs/siteLogo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import opensea from '../../assets/imgs/Opensea.png'





function Header(){

    // const [amount, setAmount] = useState()
    // const [address, setAddress] = useState()
    // const [userBalance, setUserBalance] = useState()

    const dispatch = useAppDispatch()
    const { web3, contract,web3LoadingErrorMessage } = useAppSelector((state) => state.web3Connect)

    // auto connect metamask
    useEffect(() => {
        handleMetamask();
      }, []);

    const handleMetamask = () => {
        dispatch(loadBlockchain());
        if(web3LoadingErrorMessage){
            // alert(web3LoadingErrorMessage);
            console.log(web3LoadingErrorMessage);
        }
    }

    const unloadBlockchain = () => {
        // console.log("disconnectFromBlockchain");
        // disconnectFromBlockchain();
        // dispatch(disconnectFromBlockchain());

        // console.log(contract);
    }


    const handleWalletConnect = () => {
        dispatch(loadWalletConnect());
    }
    return(
        <>
        <header className="header">
            <section className="siteHeader">
                <div className="container">
                    <div className="headerWrap">
                        <div className="navWrap">
                            <button>
                                <Icon icon="line-md:menu-unfold-right" />
                            </button>
                            <div className="siteNavigation">
                            </div>
                        </div>
                        <div className="logoWrap">
                            <Link to='/'><img src={logo} alt="Flinch"/></Link>
                        </div>
                        {
                            web3 ?
                                    <>
                                        <div className="ctaWrap">
                                            <button className="siteButton" onClick={() => unloadBlockchain()}>
                                                Wallet Connected
                                            </button>
                                        </div>
                                    </>
                            :
                                    <>
                                        <div className="ctaWrap">
                                            <button className="siteButton" onClick={() => handleMetamask()}>
                                                Connect Wallet
                                            </button>
                                        </div>
                                    </>
                        }
                    </div>
                </div>
            </section>
            <section className="siteSocial">
                <div className="container">
                    <div className="socialList">
                        <button className="socialConnect">
                            <Icon icon="raphael:paper" />
                        </button>
                        <button className="socialConnect">
                            {/* <Icon icon="simple-icons:opensea" /> */}
                            <img src={opensea} alt="OpenSea"/>
                        </button>
                        <button className="socialConnect">
                            <Icon icon="simple-icons:twitter" />
                        </button>
                        <button className="socialConnect">
                            <Icon icon="simple-icons:discord" />
                        </button>
                        <button className="socialConnect">
                            <Icon icon="ri:instagram-fill" />
                        </button>
                        <button className="socialConnect">
                            <Icon icon="mdi:youtube" />
                        </button>
                    </div>
                </div>
            </section>
        </header>
        </>
    );
}
export default Header;