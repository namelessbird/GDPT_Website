import React from 'react'
import api from "../axios"

export default function EventForm({ onSuccess }){
    const [title, setTitle] = React.useState("")
    const [lyrics, setLyrics] = React.useState("")

    const addSong = async (e) => {
        e.preventDefault()
        await api.post("http://localhost:4000/songs", {
            title,
            lyrics
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("Failed to add song: ", err))

        onSuccess()
        setTitle("")
        setLyrics("")
    }


    return(
        <div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:text-left">Add Song</h1>
            <form className="space-y-4" onSubmit={addSong}>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Event Name" className="w-full border rounded px-3 py-2" required/>
                <textarea onChange={(e) => setLyrics(e.target.value)} value={lyrics} placeholder="add lyrics here" rows={4} className="w-full border rounded px-3 py-2" required/>
                <button className="w-full sm:w-auto bg-[#384264] text-white px-6 py-2 rounded hover:brightness-90 cursor-pointer">Add Song</button>
            </form>
        </div>
    )
}