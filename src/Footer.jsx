import React from 'react'
import './styles.css'

export default function Footer(){
    return(
        <footer className='bg-[#384264] text-white block text-center py-3'>
            <p>&copy; 2025 GDPT Thiền Quang. All Rights Reserved</p>
            <p>For more information, contact: </p>
            <a className='underline'>999-999-999</a><br/>
            <a className='underline'>placeholder@gmail.com</a>
            <p>Powered by React + Tailwind</p>
        </footer>
    )
}