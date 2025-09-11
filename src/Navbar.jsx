import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = React.useState(false)
    const [resource, setResource] = React.useState(false)

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
                    className={`fixed inset-0 bg-black/30`}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {resource && (
                <div
                    className={`fixed inset-0`}
                    onClick={() => setResource(false)}
                />
            )}

            
            <nav className={`${isOpen ? "left-0" : "-left-1/6"} 
                h-screen fixed top-0 transition-all duration-500 
                ${isOpen ? "w-1/6 bg-[#384264] text-white" : "w-1/6 bg-white text-black"}
                sm:w-screen sm:h-1/12 sm:!left-0 sm:!bg-[#384264] sm:text-white sm:flex sm:items-center`}>
                <NavLink to="/"><img src="./images/Hoa_Sen.jpg" alt="logo" className="w-15 h-15 bg-white rounded-full ml-2" /></NavLink>
                <ul className="sm:flex sm:items-center sm:justify-end sm:w-full sm:space-x-6 sm:pr-7">
                    <li className=" relative leading-none">
                        <a onClick={() => setResource(!resource)} className="underline hover:cursor-pointer">Tài Liệu</a>
                        <ul className={`${resource ? 'block': 'hidden'} absolute left-1/2 -translate-x-1/2 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50`}>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"><NavLink to="/songs">Bài Hát</NavLink></li>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"><NavLink to="/games">Trò Chơi</NavLink></li>
                        </ul>
                    </li>
                    <li className="leading-none"><NavLink to="/location" className="inline-flex items-center">Địa Điểm</NavLink></li>
                </ul>
            </nav>

        </div>
    )
}