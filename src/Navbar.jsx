import React from "react"
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = React.useState(false)
    const [resource, setResource] = React.useState(false)

    function openResources(){
        setResource(!resource)
    }

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

            
            <nav className={`${isOpen ? "left-0" : "-left-1/6"} 
                h-screen fixed top-0 transition-all duration-500 
                ${isOpen ? "w-1/6 bg-[#384264] text-white" : "w-1/6 bg-white text-black"}
                sm:w-screen sm:h-1/12 sm:!left-0 sm:!bg-[#384264] sm:text-white sm:flex sm:items-center`}>
                <img src="./images/Hoa_Sen.jpg" alt="logo" className="w-15 h-15 bg-white rounded-full ml-2" />
                <ul className="sm:flex sm:items-center sm:justify-end sm:w-full sm:space-x-6 sm:pr-3">
                    <li className="leading-none">
                        <a onClick={openResources} className="underline hover:cursor-pointer">Tài Liệu</a>
                        <ul className={`${resource ? 'block': 'hidden'} pl-4`}>
                            <li>Bài Hát</li>
                            <li>Trò Chơi</li>
                        </ul>
                    </li>
                    <li className="leading-none"><a className="inline-flex items-center">Liên Lạc</a></li>
                </ul>
            </nav>

        </div>
    )
}