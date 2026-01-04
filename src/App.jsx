import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Header from './components/Header';
import Footer from './components/Footer';
// import Game from './gameboards/PlayFruits';
import About from './pages/About';
import FunFacts from './pages/FunFacts';

import PlayFruits from './gameboards/PlayFruits';
import PlayMoods from './gameboards/PlayMoods';
import PlayVegetables from './gameboards/PlayVegetables';
import PlayTransport from './gameboards/PlayTransport';
import PlayNumbers from './gameboards/PlayNumbers';
import PlayHomeware from './gameboards/PlayHomeware';
import PlayActions from './gameboards/PlayActions';
import PlayFruits2 from './gameboards/PlayFruits2';

import Next1 from './gameboards/Next1';
import Next2 from './gameboards/Next2';
import Next3 from './gameboards/Next3';
import Next4 from './gameboards/Next4';
import Next5 from './gameboards/Next5';
import Next6 from './gameboards/Next6';

import Finish from './gameboards/Finish';

{/* <Link to="/about">Go to About</Link> */}


function App() {
  // const [count, setCount] = useState(0);
  
  return (
    <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/funfacts" element={<FunFacts />} />
        {/* <Route path="/game" element={<Game />} /> */}
        <Route path="/about" element={<About />} />

        <Route path="/playfruits" element={<PlayFruits />} />
        {/* <Route path="/playfruits2" element={<PlayFruits2 />} /> */}
        <Route path="/playmoods" element={<PlayMoods />} />
        <Route path="/playvegetables" element={<PlayVegetables />} />
        <Route path="/playtransport" element={<PlayTransport />} />
        <Route path="/playnumbers" element={<PlayNumbers />} />
        <Route path="/playhomeware" element={<PlayHomeware />} />
        <Route path="/playactions" element={<PlayActions />} />

        <Route path="/next1" element={<Next1 />} />
        <Route path="/next2" element={<Next2 />} />
        <Route path="/next3" element={<Next3 />} />
        <Route path="/next4" element={<Next4 />} />
        <Route path="/next5" element={<Next5 />} />
        <Route path="/next6" element={<Next6 />} />

        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
    <Footer />
    </>

  )
}

export default App
