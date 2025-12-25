import React from 'react'
import api from '../axios'

export default function EventEditModal(props){
    const [title, setTitle] = React.useState(props.item.name)
    const [date, setDate] = React.useState(new Date(props.item.date).toISOString().split("T")[0])
    const [description, setDescription] = React.useState(props.item.description)
    const apiUrl = import.meta.env.VITE_API_URL

    // React.useEffect(() => {
    //     if (props.item) {
    //     setTitle(props.item.name)
    //     setDescription(props.item.description)
    //     setDate(new Date(props.item.date).toISOString().split("T")[0])
    //     }
    // }, [props.item])

    React.useEffect(() => {
        // Disable background scroll
        document.body.style.overflow = "hidden";

        return () => {
            // Re-enable scroll when modal closes
            document.body.style.overflow = "";
        };
    }, []);

    const updateEvent = async (id) => {
        console.log("Updating event with id: ", id)
        await api.post(`${apiUrl}/events/update`, {
            id,
            title,
            description,
            date
        })
        .catch((err) => console.log("Failed to update event: ", err))
        props.onClose()
        props.onSuccess()
    }

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={props.onClose}>
            <div className="relative w-[90%] max-w-lg rounded-lg bg-white p-6"
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={props.onClose}
                    className="absolute right-2 top-0 text-gray-500 hover:text-black text-4xl cursor-pointer">×</button>
                <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:text-left">Edit Event</h1>
                <form className="space-y-4" onSubmit={(e) =>{ 
                        e.preventDefault()
                        updateEvent(props.item._id)
                    }}>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Event Name" className="w-full border rounded px-3 py-2" required/>
                    <input onChange={(e) => setDate(e.target.value)} value={date} type="date" className="w-full border rounded px-3 py-2" required/>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Event Description" rows={4} className="w-full border rounded px-3 py-2" required/>
                    <button className="w-full sm:w-auto bg-[#384264] text-white px-6 py-2 rounded hover:brightness-90">Save Changes</button>
                </form>
            </div>
        </div>
    )
}