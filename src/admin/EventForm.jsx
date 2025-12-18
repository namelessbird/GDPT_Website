import React from 'react'
import api from "../axios"

export default function EventForm({ onSuccess }){
    const [title, setTitle] = React.useState("")
    const [date, setDate] = React.useState("")
    const [description, setDescription] = React.useState("")

    const addEvent = async (e) => {
        e.preventDefault()
        await api.post("http://localhost:4000/events", {
            title,
            description,
            date
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("Failed to add event: ", err))

        onSuccess()
        setTitle("")
        setDate("")
        setDescription("")
    }


    return(
        <div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:text-left">Add Event</h1>
            <form className="space-y-4" onSubmit={addEvent}>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Event Name" className="w-full border rounded px-3 py-2" required/>
                <input onChange={(e) => setDate(e.target.value)} value={date} type="date" className="w-full border rounded px-3 py-2" required/>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Event Description" rows={4} className="w-full border rounded px-3 py-2" required/>
                <button className="w-full sm:w-auto bg-[#384264] text-white px-6 py-2 rounded hover:brightness-90">Add Event</button>
            </form>
        </div>
    )
}