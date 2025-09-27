import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = React.useState(false)

    return(
        
        <div>
            {/* <button className="fa-solid fa-bars scale-150 cursor-pointer pl-2 pt-2 sm:!hidden" onClick={() => setIsOpen(!isOpen)}/> */}
            <button
                className="absolute top-4 left-4 scale-150 cursor-pointer sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="fa-solid fa-bars"></span>
            </button>


            {isOpen && (
                <div
                    className={`fixed inset-0 bg-black/30 z-10`}
                    onClick={() => setIsOpen(false)}
                />
            )}

            
            <nav className={`${isOpen ? "left-0" : "-left-1/6"} 
                h-screen fixed top-0 transition-all duration-500 
                ${isOpen ? "w-1/2 bg-[#384264] text-white" : "w-1/6 bg-white text-black"}
                sm:w-screen sm:h-1/12 sm:!left-0 sm:!bg-[#384264] sm:text-white sm:flex sm:items-center sm:z-3`}>
                <NavLink to="/"><img src="./images/Hoa_Sen.jpg" alt="logo" className="w-15 h-15 bg-white rounded-full ml-2" /></NavLink>
                <ul className="sm:flex sm:items-center sm:justify-end sm:w-full sm:space-x-6 sm:pr-7">
                    <li className="leading-none"><NavLink to="/songs" className="inline-flex items-center text-lg">Bài Hát</NavLink></li>
                    <li className="leading-none"><NavLink to="/games" className="inline-flex items-center text-lg">Trò Chơi</NavLink></li>
                    <li className="leading-none"><NavLink to="/location" className="inline-flex items-center text-lg">Địa Điểm</NavLink></li>
                </ul>
            </nav>

        </div>
    )
}