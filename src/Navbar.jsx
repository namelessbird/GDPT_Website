import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) setIsOpen(false)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full h-18 bg-[#384264] flex items-center justify-between px-4 z-60 sm:z-50 shadow-md">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                    <img src="./images/Hoa_Sen.jpg" alt="logo" className="w-15 bg-white rounded-full" />
                </NavLink>

                <div 
                    className="grid justify-items-center gap-1.5 cursor-pointer sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`h-1 w-7 rounded-full bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                    <span className={`h-1 w-7 rounded-full bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`h-1 w-7 rounded-full bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                </div>

                <ul className="hidden sm:flex items-center space-x-6 pr-7">
                    <li><NavLink to="/calendar" className="text-white text-lg hover:text-blue-300 transition-colors">Lịch</NavLink></li>
                    <li><NavLink to="/songs" className="text-white text-lg hover:text-blue-300 transition-colors">Bài Hát</NavLink></li>
                    <li><NavLink to="/games" className="text-white text-lg hover:text-blue-300 transition-colors">Trò Chơi</NavLink></li>
                    <li><NavLink to="/location" className="text-white text-lg hover:text-blue-300 transition-colors">Địa Điểm</NavLink></li>
                </ul>
            </div>


            <div className={`fixed left-0 w-full bg-[#384264] transition-all duration-500 ease-in-out z-50 flex flex-col items-center justify-center space-y-8 sm:hidden 
                ${isOpen ? "top-0 h-screen opacity-100" : "-top-full h-screen opacity-0"}`}>
                <NavLink to="/calendar" className="text-3xl text-white font-medium" onClick={() => setIsOpen(false)}>Lịch</NavLink>
                <NavLink to="/songs" className="text-3xl text-white font-medium" onClick={() => setIsOpen(false)}>Bài Hát</NavLink>
                <NavLink to="/games" className="text-3xl text-white font-medium" onClick={() => setIsOpen(false)}>Trò Chơi</NavLink>
                <NavLink to="/location" className="text-3xl text-white font-medium" onClick={() => setIsOpen(false)}>Địa Điểm</NavLink>
            </div>
        </div>
    )
}