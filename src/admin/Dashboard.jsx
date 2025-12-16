import React from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import AdminEvents from "./AdminEvents"
import AdminSongs from "./AdminSongs"

export default function Dashboard() {
   
    React.useEffect(() => {
        axios.get("http://localhost:4000/admin-dashboard", {
            withCredentials: true
        }).catch(() => {
            window.location.replace('/login');
        });
    }, []);

    const [tab, setTab] = React.useState(0);

    const tabs = ["Events", "Songs"];

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="relative flex items-center justify-between bg-[#384264] text-white px-4 py-3 shadow-md">
                <NavLink to="/" className="flex items-center gap-2">
                    <img
                    src="./images/Hoa_Sen.jpg"
                    alt="logo"
                    className="w-9 h-9 bg-white rounded-full"
                    />
                    <span className="font-semibold text-sm sm:text-base hidden sm:block">
                    Admin Panel
                    </span>
                </NavLink>

                <ul className="flex flex-wrap justify-center gap-2 text-sm sm:text-base">
                    {tabs.map((label, i) => (
                        <li key={i}onClick={() => setTab(i)}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer transition
                            ${tab === i ? "bg-[#252b41]": "hover:bg-[#2f3652]"}`}>
                            {label}
                        </li>
                    ))}
                </ul>
            </header>

            <main className="flex-1 p-4 sm:p-6">
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-4 sm:p-6">
                    {tab === 0 && (
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4">All Events</h1>
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border p-3 rounded">
                                <span className="font-medium">Event Name Example</span>
                                <span className="text-sm text-gray-500">2025-05-01</span>
                            </div>
                        </div>
                    </div>
                    )}

                    {tab === 1 && <AdminEvents/>}

                    {tab === 2 && <AdminSongs/>}
                </div>
            </main>
        </div>
    );
}
