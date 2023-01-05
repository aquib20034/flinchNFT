import React from "react";
import './Video.css';
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom';

function Video(){
    return(
        <>
        <section className="VideoSection" id={'WatchMovieRef'}>
            <div className="container">
                <div className="HeadingPattern">
                    <h2>Watch the movie</h2>
                </div>
                <div className="VideoContent">
                    <ReactPlayer
                        url="https://vimeo.com/3155182"
                        // playing={true}
                        controls={true}
                        loop={true}
                        playsinline={true}
                        width="100%"
                        height="660px"
                        // title={false}
                        // config={{
                        //     vimeo: {
                        //       playerVars: { showinfo: 0 }
                        //     }
                        //   }}
                          className="vimeoEmbed"
                    />
                </div>
                <p>The Flinch experience starts here. Part one in our franchise is "The Girl Who Didn't Flinch." Your Flinch assets allow you to watch the film anytime, anywhere. Just connect your wallet that holds your Flinch assets and watch on your phone, computer or airplay to your TV. Experience the film for yourself, then start building the franchise with us. Flinch stars Daniel Zovatto, Tilda Cobham-Hervey, Cathy Moriarty, Tom Segura, Buddy Duress, Steven Bauer, Michael Drayer and David Proval.</p>
                
            </div>
        </section>
        <section className="featureFilm">
            <div className="container">
                <div className="featureFilmContent">
                    <div className="featureFilmHeader">
                        <h2>Watch the feature film in</h2>
                        <Link to="/thecinema" className="siteButton">
                            The Cinema
                        </Link>
                    </div>
                    <div className="filmMintArea">
                        <div className="notice">If you don't hold any Flinch assets yet, you can get them, here</div>
                        <Link to="/mint" className="siteButton mintButton">go to mint</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Video;