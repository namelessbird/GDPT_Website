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
            <button className="fa-solid fa-bars scale-150 cursor-pointer pl-2 pt-2 peer"/>
            <nav className="peer-focus:left-0 peer-focus:bg-sky-950 peer-focus:text-white -left-1/6 bg-white text-black h-screen w-1/6 bg-sky-950 pl-2 pt-2 fixed top-0 transition-all duration-1000">
                <img src="" alt="logo" className="w-15 h-15" />
                <ul>
                    <li>
                        <a onClick={openResources} className="underline hover:cursor-pointer">Tài Liệu</a>
                        <ul className={`${resource ? 'block': 'hidden'}`}>
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