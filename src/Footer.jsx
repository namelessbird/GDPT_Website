import React from 'react'
import './styles.css'

export default function Footer(){
    return(
        /* w-full ensures it stretches, and mt-auto is a safety for flex layouts */
        <footer className='w-full bg-[#384264] text-white text-center py-6 mt-auto'>
            <div className="px-4">
                <p>&copy; 2025 GDPT Thiền Quang. All Rights Reserved</p>
                <p className="mt-2">For more information, contact:</p>
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-1">
                    <a className='underline hover:text-blue-300 transition-colors' href="tel:999999999">999-999-999</a>
                    <span className="hidden sm:inline">|</span>
                    <a className='underline hover:text-blue-300 transition-colors' href="mailto:placeholder@gmail.com">placeholder@gmail.com</a>
                </div>
                <p className="mt-4 text-xs opacity-70 italic text-neutral-300">Powered by MERN Stack + Tailwind</p>
            </div>
        </footer>
    )
}