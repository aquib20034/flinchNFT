import React from "react";
import './FlinchMerch.css';
import flinchOne from '../../assets/imgs/flinchMerch1.jpg'
import flinchTwo from '../../assets/imgs/flinchMerch2.jpg'
import flinchThree from '../../assets/imgs/flinchMerch3.jpg'

function FlinchMerch(){
    return(
        <>
        <section className="FlinchMerchSection">
            <div className="container">
                <div className="FlinchMerchContent">
                    <h2>Flinch Merch</h2>
                    <div className="productGrid">
                        <div className="productBlock">
                            <img src={flinchOne} alt="Flinch Merch"/>
                        </div>
                        <div className="productBlock">
                            <img src={flinchTwo} alt="Flinch Merch"/>
                        </div>
                        <div className="productBlock">
                            <img src={flinchThree} alt="Flinch Merch"/>
                        </div>
                    </div>
                    <a href="https://www.ardorpictures.com/collections/all" className="siteButton mintButton" target={'_blank'} rel="noreferrer">Shop Now</a>
                </div>
            </div>
        </section>
        </>
    );
}
export default FlinchMerch;