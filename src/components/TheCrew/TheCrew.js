import React from "react";
import './TheCrew.css';
import Founder from '../../assets/imgs/founder.png'
import Artist from '../../assets/imgs/artist.png'
import { Icon } from '@iconify/react';

function TheCrew(){
    return(
        <>
        <section className="TheCrewSection">
            <div className="container">
                <div className="TheCrewContent">
                    <h2>The Crew</h2>
                    <div className="TheCrewGrid">
                        <div className="CrewMember">
                            <img src={Founder} alt="Founder"/>
                            <span className="crewDesignation">Founder</span>
                            <h3>Cameron Van Hoy</h3>
                            <p>Van Hoy is a filmmaker and the director of Flinch, innovating the future of cinema and web3.</p>
                            <ul className="CrewSocial">
                                <li><a href={'https://twitter.com/'} target={'_blank'} rel="noreferrer"><Icon icon="simple-icons:twitter" /></a></li>
                                <li><a href={'https://instagram.com/'} target={'_blank'} rel="noreferrer"><Icon icon="ri:instagram-fill" /></a></li>
                            </ul>
                        </div>
                        <div className="CrewMember">
                            <img src={Artist} alt="Artist"/>
                            <span className="crewDesignation">Artist</span>
                            <h3>Sveta Shubina</h3>
                            <p>Sveta is the artist behind the Flinch characters. She works from Ukraine where she has cultivated her world renowned style.</p>
                            <ul className="CrewSocial">
                                <li><a href={'https://twitter.com/'} target={'_blank'} rel="noreferrer"><Icon icon="simple-icons:twitter" /></a></li>
                                <li><a href={'https://instagram.com/'} target={'_blank'} rel="noreferrer"><Icon icon="ri:instagram-fill" /></a></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        </>
    );
}
export default TheCrew;