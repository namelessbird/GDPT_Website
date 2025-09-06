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
                className="scale-150 cursor-pointer pl-2 pt-2 sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="fa-solid fa-bars"></span>
            </button>


            {isOpen && (
                <div
                    className="fixed inset-0 filter brightness-50 -z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
            
            <nav className={`${isOpen ? "left-0" : "-left-1/6"} 
                h-screen pl-2 pt-2 fixed top-0 transition-all duration-1000 
                ${isOpen ? "w-1/6 bg-sky-950 text-white" : "w-1/6 bg-white text-black"}
                sm:w-screen sm:h-1/12 sm:!left-0 sm:!bg-sky-950 sm:text-white sm:flex`}>
                <img src="" alt="logo" className="w-15 h-15" />
                <ul className="sm:flex sm:justify-end sm:w-full sm:space-x-6 sm:pr-3">
                    <li>
                        <a onClick={openResources} className="underline hover:cursor-pointer">Tài Liệu</a>
                        <ul className={`${resource ? 'block': 'hidden'} pl-4`}>
                            <li>Bài Hát</li>
                            <li>Trò Chơi</li>
                        </ul>
                    </li>
                    <li>Liên Lạc</li>
                </ul>
            </nav>

        </div>
    )
}