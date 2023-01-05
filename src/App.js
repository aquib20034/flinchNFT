
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ComingSoon from './Pages/ComingSoon';
import TheCinema from './Pages/TheCinemaPage';
import Minting from './Pages/MintAsset';



function App(){
  return (<>
  <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/comingsoon" element={<ComingSoon />} />
    <Route path="/mint" element={<Minting />} />
    <Route path="/thecinema" element={<TheCinema />} />
  </Routes>
  </>)
}
export default App;
