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
        const res = await api.get("http://localhost:4000/events")
        setEvents(res.data)
    }

    const deleteEvent = async (id) => {
        console.log(id)
        const res = await api.delete(`http://localhost:4000/events/${id}`)
        fetchEvents()
    }

    return (
    <div>
      {/* <div>
          <h1 className="text-xl sm:text-2xl font-semibold mb-4">All Events</h1>
          <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border p-3 rounded">
                  <span className="font-medium">Event Name Example</span>
                  <span className="text-sm text-gray-500">2025-05-01</span>
              </div>
          </div>
      </div> */}
      <h2 className="text-xl sm:text-3xl font-semibold mb-4">Manage Events</h2>

      <EventForm onSuccess={fetchEvents} />

      <div className="mt-15 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:text-left">
          All Events
        </h2>

        {events.map(event => (
          <div
            key={event._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border p-4 rounded-lg shadow-sm bg-white"
          >
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{event.name}</h3>
              <p className="text-gray-600 mt-1">{event.description}</p>
              <p className="text-gray-500 mt-1 text-sm">{"Event Date: " + new Date(event.date).toLocaleDateString()}</p>
            </div>

            <div className="flex gap-3 mt-3 sm:mt-0">
              <button
                onClick={() => setEdit(event)}
                className="px-3 py-1 border rounded hover:bg-gray-100 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEvent(event._id)}
                className="px-3 py-1 border rounded text-red-600 hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>


      {editEvent && (
        <EditModal
          item={editEvent}
          type="event"
          onClose={() => setEdit(null)}
          onSuccess={fetchEvents}
        />
      )}
    </div>
  )
}