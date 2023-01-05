import React from 'react';
import './../App.css';
import Header from './../components/Header/Header';
import Banner from './../components/Banner/Banner';
import About from './../components/About/About';
import Video from './../components/Video/Video';
import MintAsset from './../components/MintAsset/MintAsset';
import StakeAsset from './../components/StakeAsset/StakeAsset';
import VisitSet from './../components/VisitSet/VisitSet';
import FlinchMerch from './../components/FlinchMerch/FlinchMerch';
import TheCrew from './../components/TheCrew/TheCrew';
import Footer from './../components/Footer/Footer';






function Home() { 
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Video/>
    <MintAsset/>
    <VisitSet/>
    <StakeAsset/>
    <FlinchMerch/>
    <TheCrew/>
    <Footer/>
    </>
  );
}

export default Home;
