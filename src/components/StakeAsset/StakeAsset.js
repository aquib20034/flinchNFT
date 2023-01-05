import React from "react";
import './StakeAsset.css';
import StakeYourAsset from '../../assets/imgs/1.gif';

function StakeAssets(){
    return(
        <>
        <section className="LandingSections" id={'StakeAssetRef'}>
            <div className="container">
                <div className="HeadingPattern contentHeaderPattern">
                    <div className="contentHeader"></div>
                    <h2>Stake<br/>Your Asset</h2>
                </div>
                <div className="contentGrid">
                    <div className="thumbnailCol">
                        <img src={StakeYourAsset} alt="Mint Your Asset"/>
                    </div>
                    <div className="contentCol">
                        <p>Stake your digital assets to earn FLNH tokens. FLNH is the currency that buys you say over the creative process. The longer you stake your assets, the more you earn - this also provides value to the project by taking items out of circulation. You must hold at least 1 Genesis Pass to stake any of your items. Some assets earn more FLNH than others based off type and rarity. Staking is simple and powerful. Stake your assets today.</p>
                        <button className="siteButton mintButton">Start Staking</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default StakeAssets;