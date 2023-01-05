import React from "react";
import './MintAsset.css';
import MintYourAsset from '../../assets/imgs/4.gif';
import { Link } from 'react-router-dom';


function MintAssets(){
    return(
        <>
        <section className="LandingSections" id={'MintAssettRef'}>
            <div className="container">
                <div className="HeadingPattern contentHeaderPattern">
                    <div className="contentHeader"></div>
                    <h2>Mint<br/>Your Asset</h2>
                </div>
                <div className="contentGrid">
                    <div className="thumbnailCol">
                        <img src={MintYourAsset} alt="Mint Your Asset"/>
                    </div>
                    <div className="contentCol">
                        <p>The Flinch Experience uses blockchain technology to grant a large community true ownership over their assets. Your Flinch assets are the key to accessing all that the Flinch Experience has to offer. Watch films, animations, shorts and content. Direct your own episodes, star in films, participate in the creative process, play games, create stories and characters of value. Be part of the community. It all starts here.</p>
                        <Link to="/mint" className="siteButton mintButton">Mint Assets</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default MintAssets;