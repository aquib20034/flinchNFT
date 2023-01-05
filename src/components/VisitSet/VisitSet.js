import React from "react";
import { Link } from 'react-router-dom';
import './VisitSet.css';
import VisitSetImg from '../../assets/imgs/visit.gif';

function VisitSet(){
    return(
        <>
        <section className="LandingSections visitSetSec" id={'VisitSetRef'}>
            <div className="container">
                <div className="HeadingPattern contentHeaderPattern">
                    <h2>Visit<br/>The Set</h2>
                    <div className="contentHeader"></div>
                </div>
                <div className="contentGrid">
                    <div className="contentCol">
                        <p>Flinch is the first community built and owned cinematic franchise. The Set is our studio backlot where we create our stories. Visit as a guest and experience the world, play games, hang out, follow characters on their journeys and be entertained. Flinch asset holders get to create the story themselves. Here everyone is the central character. Build your character's lore, make your own films or star in other people's work. Partake in the future of film with Flinch.</p>
                        <Link to='/comingsoon' className="siteButton mintButton">Visit Set</Link>
                    </div>
                    <div className="thumbnailCol">
                        <img src={VisitSetImg} alt="Mint Your Asset"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default VisitSet;