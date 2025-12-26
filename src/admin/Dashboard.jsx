import React from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import AdminEvents from "./AdminEvents"
import AdminSongs from "./AdminSongs"

export default function Dashboard() {
    const apiUrl = import.meta.env.VITE_API_URL

    React.useEffect(() => {
        axios.get(`${apiUrl}/admin-dashboard`, {
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
                    src="/images/Hoa_Sen.jpg"
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
                    {tab === 0 && <AdminEvents/>}
                    {tab === 1 && <AdminSongs/>}
                </div>
            </main>
        </div>
    );
}
