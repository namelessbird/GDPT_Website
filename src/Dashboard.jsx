import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Dashboard(){

    // React.useEffect(() => {
    //     axios.get("http://localhost:4000/admin-dashboard", {
    //         withCredentials: true
    //     }).catch(() => {
    //         window.location.replace('/login');
    //     });
    // }, []);


    return(
        <div className="flex flex-col h-screen">
            <div className="relative flex items-center bg-[#384264] text-white pl-4 py-2">
                <NavLink to="/">
                    <img
                        src="./images/Hoa_Sen.jpg"
                        alt="logo"
                        className="w-15 bg-white rounded-full -ml-2"
                    />
                </NavLink>

                <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6">
                    <li>Add Event</li>
                    <li>Delete Event</li>
                    <li>See Events</li>
                </ul>
            </div>


            <div className="flex-1 bg-gray-300 pt-3 pl-2">
                <h1>Admin Dashboard</h1>
                <form>
                    <input type="text" className=""></input>
                </form>
            </div>
        </div>
    )
}