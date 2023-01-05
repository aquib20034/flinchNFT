import React from "react";
import { Icon } from '@iconify/react';
import logo from '../../assets/imgs/siteLogo.png';
import './Footer.css';
import OpenSeaIcon from '../../assets/imgs/Opensea.png';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="container">
                <div className="footerCols">
                    <div className="footerAbout">
                        <div className="logoWrap">
                            <Link to='/'><img src={logo} alt="Flinch"/></Link>
                            <p>Our mission is to revolutionize cinema. How? Replace the movie studio with a community that has ownership over a cinematic franchise via the blockchain. The Flinch Experience is a cinematic world filled with characters that are owned by the community. This community of creators and storytellers build the franchise together on the Ethereum network.</p>
                        </div>
                    </div>
                    <div className="footerPages">
                        <h3>Pages</h3>
                        <Link to="/thecinema" className="socialConnect">Watch The movie</Link>
                        <Link to="/mint" className="socialConnect">Genesis mint</Link>
                        <Link to="/" className="socialConnect">Get a character</Link>
                    </div>
                    <div className="footerSocial">
                        <h3>Social Links</h3>
                        <div className="socialList">
                            <button className="socialConnect">
                                <Icon icon="raphael:paper" />
                            </button>
                            <button className="socialConnect">
                                <img src={OpenSeaIcon} alt="opensea icon"/>
                            </button>
                            <button className="socialConnect">
                                <Icon icon="simple-icons:twitter" />
                            </button>
                            <button className="socialConnect">
                                <Icon icon="simple-icons:discord" />
                            </button>
                            <button className="socialConnect">
                                <img src={OpenSeaIcon} alt="opensea icon"/>
                            </button>
                            <button className="socialConnect">
                                <Icon icon="ri:instagram-fill" />
                            </button>
                            <button className="socialConnect">
                                <Icon icon="mdi:youtube" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <section className="copyrightBar">
            <div className="container">
                <p>Copyright 2022 © Design & Development by <a href={'https://geeksroot.com'} target="_blank" rel="noreferrer">Geeks Root</a>. All right reserved</p>
            </div>
        </section>
        </>
    );
}
export default Footer;