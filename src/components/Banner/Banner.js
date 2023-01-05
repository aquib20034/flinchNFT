import React from "react";
import './Banner.css';
import BannerOne from '../../assets/imgs/1grid.jpg';
import BannerTwo from '../../assets/imgs/2grid.jpg';
import BannerThree from '../../assets/imgs/3grid.jpg';
import BannerFour from '../../assets/imgs/4grid.jpg';
import WatchTheMovie from '../../assets/imgs/3.gif';
import StakeYourAsset from '../../assets/imgs/1.gif';
import MintYourAsset from '../../assets/imgs/4.gif';
import VisitSetImg from '../../assets/imgs/visit.gif';

function Banner(){
    return(
        <>
            <section className="bannerGrid">
                <div className="translatedGrid">
                    <div className="translatedBlock">
                        <a href={'#StakeAssetRef'} className="gridButton">
                            <div className="gridGif">
                                <img src={StakeYourAsset} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridImage">
                                <img src={BannerOne} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridContent">
                                <h3>Stake Your<br/>Asset</h3>
                            </div>
                        </a>
                    </div>
                    <div className="translatedBlock">
                        <a href={'#VisitSetRef'} className="gridButton">
                            <div className="gridGif">
                                <img src={VisitSetImg} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridImage">
                                <img src={BannerTwo} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridContent">
                                <h3>Visit<br/>the Set</h3>
                            </div>
                        </a>
                    </div>
                    <div className="translatedBlock">
                        <a href={'#WatchMovieRef'} className="gridButton">
                            <div className="gridGif">
                                <img src={WatchTheMovie} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridImage">
                                <img src={BannerThree} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridContent">
                                <h3>Watch<br/>The Movie</h3>
                            </div>
                        </a>
                    </div>
                    <div className="translatedBlock">
                        <a href={'#MintAssettRef'} className="gridButton">
                            <div className="gridGif">
                                <img src={MintYourAsset} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridImage">
                                <img src={BannerFour} alt="Flinch Gallery"/>
                            </div>
                            <div className="gridContent">
                                <h3>Mint<br/>Your Asset</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Banner;