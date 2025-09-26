import React from 'react'
import './styles.css'

export default function Song(props){
    const [show, setShow] = React.useState(false)

    return(
        <div>
            <h2 className=''>{props.title}</h2>
            <p className={`${show ? "hidden" : "visible"} cursor-pointer underline`} onClick={() => setShow(true)}>Show Lyrics</p>
            <p className={`${show ? "visible" : "hidden"}`}>{props.lyrics}</p>
            <p className={`${show ? "visible" : "hidden"} cursor-pointer underline`} onClick={() => setShow(false)}>Collapse Lyrics</p>
        </div>
    )
}