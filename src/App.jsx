import React from "react";
import Navbar from "./Navbar"
import Hero from "./Hero"
import Activity from "./Activity";
import Footer from "./Footer";
import Location from './Location';
import Songs from './Songs';
import Games from "./Games";
import Login from "./Login";
import Dashboard from "./admin/Dashboard";
import Events from "./Events"
import {Routes, Route} from 'react-router-dom';
import "./styles.css"

const Main = () => (
  <Routes>
    <Route exact path='/' element={<><Navbar/><Hero/><Activity/><Events/><Footer/></>}></Route>
    <Route exact path='/games' element={<><Navbar/><Games /></>}></Route>
    <Route exact path='/songs' element={<><Navbar/><Songs /></>}></Route>
    <Route exact path='/location' element={<><Navbar/><Location/></>}></Route>
    <Route exact path='/admin-dashboard' element={<Dashboard/>}></Route>
    <Route exact path='/login' element={<Login />}></Route>
  </Routes>
)

function App() {
  return (
    <div /*className="sm:pt-[8.333vh]"*/>
      {/* <Navbar /> */}
      <Main />
    </div>
  );
}

export default App;
