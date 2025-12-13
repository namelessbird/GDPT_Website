import React from "react";
import axios from "axios";

export default function Dashboard(){

    React.useEffect(() => {
        axios.get("http://localhost:4000/admin-dashboard", {
            withCredentials: true
        }).catch(() => {
            window.location.replace('/login');
        });
    }, []);


    return(
        <div>
            <h1>Welcome to the Admin Dashboard</h1>
        </div>
    )
}