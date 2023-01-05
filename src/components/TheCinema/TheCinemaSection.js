import React from "react";
import './TheCinema.css';
import ReactPlayer from "react-player"


function TheCinemaSection(){
    return(
        <>
        <section className="TheCinemaSection">
            <ReactPlayer
                url="https://vimeo.com/3155182"
                // playing={true}
                controls={true}
                loop={true}
                playsinline={true}
                width="100%"
                height="1080px"
                // title={false}
                // config={{
                //     vimeo: {
                //         playerVars: { showinfo: 0 }
                //     }
                //     }}
                    className="vimeoEmbed"
            />
        </section>
        </>
    );
}
export default TheCinemaSection;