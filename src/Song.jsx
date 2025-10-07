import React from 'react'
import './styles.css'

export default function Song(props){
    const [show, setShow] = React.useState(false)

    return(
        <div>
            <h2 className='font-bold underline text-xl'>{props.title}</h2>
            <button className={`${show ? "hidden" : "visible"} cursor-pointer underline`} onClick={() => setShow(true)}>Xem Lời Bài Hát</button>
            <p className={`${show ? "visible" : "hidden"} whitespace-pre-line`}>{props.lyrics}</p>
            <button className={`${show ? "visible" : "hidden"} cursor-pointer underline`} onClick={() => setShow(false)}>Đóng Lời Bài Hát</button>
        </div>
    )
}