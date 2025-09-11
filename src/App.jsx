import React from "react";
import Navbar from "./Navbar"
import Hero from "./Hero"
import Activity from "./Activity";
import Footer from "./Footer";
import {Routes, Route} from 'react-router-dom';
import "./styles.css"

const Main = () => (
  <Routes>
    <Route exact path='/' element={<><Hero/><Activity/><Footer/></>}></Route>
    <Route exact path='/songs' element={<Footer/>}></Route>
    <Route exact path='/games' element={<Footer/>}></Route>
    <Route exact path='/location' element={<Footer/>}></Route>
  </Routes>
)

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
