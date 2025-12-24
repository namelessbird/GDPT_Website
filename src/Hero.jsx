import React from 'react'
import "./styles.css"

export default function Hero(){
    return(
        <div>
            <div className='bg-[url("/images/hero.jpg")] h-[75vh] bg-center bg-cover bg-no-repeat -mt-'>
            </div>
            <div className='flex flex-col pt-4'>
                <h2 className='text-center text-2xl font-bold'>Welcome to Gia Đình Phật Tử Thiền Quang</h2>
                <p className='text-center px-16 pt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}