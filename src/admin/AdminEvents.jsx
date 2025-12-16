import React from 'react'
import api from '../axios'
import EventForm from './EventForm'

export default function AdminEvents(){
    const [events, setEvents] = React.useState([])
    const [editEvent, setEdit] = React.useState(null)

    React.useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        const res = await api.get("")
        setEvents(res.data)
    }

    const deleteEvent = async () => {
        const res = await api.get("")
        fetchEvents()
    }

    return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Events</h2>

      <EventForm onSuccess={fetchEvents} />

      <div className="mt-6 space-y-3">
        {events.map(event => (
          <div key={event._id} className="flex justify-between border p-3 rounded">
            <span>{event.title}</span>
            <div className="flex gap-3">
              <button onClick={() => setEditing(event)} className="underline">
                Edit
              </button>
              <button onClick={() => deleteSong(event._id)} className="text-red-600 underline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editEvent && (
        <EditModal
          item={editEvent}
          type="song"
          onClose={() => setEdit(null)}
          onSuccess={fetchEvents}
        />
      )}
    </div>
  )
}