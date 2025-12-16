import React from 'react'

export default function EventForm(){
    return(
        <div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Add Event</h1>

            <form className="space-y-4">
                <input type="text" placeholder="Event Name" className="w-full border rounded px-3 py-2"/>
                <input type="date" className="w-full border rounded px-3 py-2" />
                <textarea placeholder="Event Description" rows={4} className="w-full border rounded px-3 py-2"/>
                <button className="w-full sm:w-auto bg-[#384264] text-white px-6 py-2 rounded hover:brightness-90">Add Event</button>
            </form>
        </div>
    )
}