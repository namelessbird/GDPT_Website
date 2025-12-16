import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
   
    React.useEffect(() => {
        axios.get("http://localhost:4000/admin-dashboard", {
            withCredentials: true
        }).catch(() => {
            window.location.replace('/login');
        });
    }, []);

    const [tab, setTab] = React.useState(0);

    const tabs = ["See Events", "Add Event", "Delete Event"];

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

                    {tab === 1 && (
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4">Add Event</h1>

                        <form className="space-y-4">
                            <input type="text" placeholder="Event Name" className="w-full border rounded px-3 py-2"/>
                            <input type="date" className="w-full border rounded px-3 py-2" />
                            <textarea placeholder="Event Description" rows={4} className="w-full border rounded px-3 py-2"/>
                            <button className="w-full sm:w-auto bg-[#384264] text-white px-6 py-2 rounded hover:brightness-90">Add Event</button>
                        </form>
                    </div>
                    )}

                    {tab === 2 && (
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4">Delete Event</h1>
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border p-3 rounded">
                                <span className="font-medium">Event Name Example</span>
                                <button className="text-red-600 hover:underline mt-2 sm:mt-0">Delete</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </main>
        </div>
    );
}
