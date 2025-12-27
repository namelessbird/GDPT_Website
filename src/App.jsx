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
import {Routes, Route, Navigate} from 'react-router-dom';
import api from './axios'
import "./styles.css"

function RequireAuth({ loggedIn, children }) {
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function RedirectIfAuth({ loggedIn, children }) {
  if (loggedIn) {
    return <Navigate to="/admin-dashboard" replace />;
  }
  return children;
}

const Main = ({loggedIn}) => (
  <Routes>
    <Route exact path='/' element={<><Navbar/><Hero/><Events/><Footer/></>}></Route>
    <Route exact path='/games' element={<><Navbar/><Games /></>}></Route>
    <Route exact path='/songs' element={<><Navbar/><Songs /></>}></Route>
    <Route exact path='/location' element={<><Navbar/><Location/></>}></Route>
    <Route exact path='/admin-dashboard' element={<RequireAuth loggedIn={loggedIn}><Dashboard/></RequireAuth>}></Route>
    <Route exact path='/login' element={<RedirectIfAuth loggedIn={loggedIn}><Login /></RedirectIfAuth>}></Route>
    <Route exact path='/calendar' element={<><Navbar/><Activity/></>}></Route>
  </Routes>
)

function App() {
    const [loggedIn, setLoggedIn] = React.useState(false)
    const apiUrl = import.meta.env.VITE_API_URL

    const getSession = async () => {
      await api.get(`${apiUrl}/auth/session`)
        .then(res => res.json())
        .then(data => setLoggedIn(data.loggedIn))
        .catch(() => setLoggedIn(false))
    }

    React.useEffect(() => {
      getSession()
    }, [])

  return (
    <div /*className="sm:pt-[8.333vh]"*/>
      {/* <Navbar /> */}
      <Main loggedIn={loggedIn}/>
    </div>
  )
}

export default App;
