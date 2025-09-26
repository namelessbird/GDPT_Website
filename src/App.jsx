import React from "react";
import Navbar from "./Navbar"
import Hero from "./Hero"
import Activity from "./Activity";
import Footer from "./Footer";
import Location from './Location'
import Games from "./Games";
import {Routes, Route} from 'react-router-dom';
import "./styles.css"

const Main = () => (
  <Routes>
    <Route exact path='/' element={<><Hero/><Activity/><Footer/></>}></Route>
    <Route exact path='/songs' element={<Footer/>}></Route>
    <Route exact path='/games' element={<Games />}></Route>
    <Route exact path='/location' element={<><Location/></>}></Route>
  </Routes>
)

function App() {
  return (
    <div /*className="sm:pt-[8.333vh]"*/>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
