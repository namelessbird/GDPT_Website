import React from "react"
import "./styles.css"

export default function Navbar(){
    const [isOpen, setIsOpen] = React.useState(false)
    const [resource, setResource] = React.useState(false)

    function openResources(){
        setResource(!resource)
    }

    return(
        <div>
            <nav className="mx-auto bg-sky-950 text-white">
                <img src="" alt="logo" className="w-15 h-15" />
                <ul>
                    <li>
                        <a onClick={openResources}>Tài Liệu</a>
                        <ul className={`${resource ? 'visible': 'hidden'}`}>
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