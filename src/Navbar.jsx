import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = React.useState(false)

     React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false) // 👈 close menu when going to desktop size
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return(
        
        <div>
            {/* <button
                className="fixed top-4 right-4 scale-150 cursor-pointer z-10 text-white sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="fa-solid fa-bars"></span>
            </button> */}

            <div className="fixed top-4 right-4 cursor-pointer z-10 grid justify-items-center gap-1.5 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}>
                <span className={`h-1 w-7 rounded-full bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                <span className={`h-1 w-7 rounded-full bg-white ${isOpen ? "scale-x-0" : ""}`}></span>
                <span className={`h-1 w-7 rounded-full bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </div>


            
            <nav className={`fixed top-0 transition-all duration-500 
                ${isOpen ? "w-full h-screen bg-[#384264] text-white flex flex-col items-center" : "w-full h-18 bg-[#384264] text-white flex items-center"}
+               sm:w-screen sm:h-18 sm:!bg-[#384264] sm:text-white sm:flex sm:items-center sm:justify-between sm:px-4 sm:z-30`}>
                <NavLink to="/"><img src="./images/Hoa_Sen.jpg" alt="logo" className="w-15 bg-white rounded-full ml-2 sm:ml-0 sm:mt-0 justify-start" onClick={() => setIsOpen(false)}/></NavLink>
                <ul className={`${isOpen ? "visible opacity-100" : "hidden opacity-0"} sm:visible sm:opacity-100 transition-opacity duration-1000 h-full text-center pt-[20%] space-y-8 sm:pt-0 sm:space-y-0 sm:flex sm:items-center sm:justify-end sm:w-full sm:space-x-6 sm:pr-7`}>
                    <li className="leading-none"><NavLink to="/songs" className="inline-flex items-center text-2xl sm:text-lg" onClick={() => setIsOpen(false)}>Bài Hát</NavLink></li>
                    <li className="leading-none"><NavLink to="/games" className="inline-flex items-center text-2xl sm:text-lg" onClick={() => setIsOpen(false)}>Trò Chơi</NavLink></li>
                    <li className="leading-none"><NavLink to="/location" className="inline-flex items-center text-2xl sm:text-lg" onClick={() => setIsOpen(false)}>Địa Điểm</NavLink></li>
                </ul>
            </nav>

        </div>
    )
}