import React from 'react'
import api from '../axios'
import SongForm from './SongForm'
import EditModal from './SongEditModal'

export default function AdminSongs(){
    const [songs, setSongs] = React.useState([])
    const [editSong, setEdit] = React.useState(null)
    const [sortOrder, setSortOrder] = React.useState("asc")
    const [page, setPage] = React.useState(1)
    const limit = 5 


    React.useEffect(() => {
        fetchSongs()
    }, [page, sortOrder])


    const fetchSongs = async () => {
        const res = await api.get(`http://localhost:4000/songs/${sortOrder}?page=${page}&limit=${limit}`)
        setSongs(res.data)
    }

    const deleteSong = async (id) => {
        console.log(id)
        const res = await api.delete(`http://localhost:4000/songs/${id}`)
        fetchSongs()
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
      <h2 className="text-xl sm:text-3xl font-semibold mb-4">Manage Songs</h2>

      <SongForm onSuccess={fetchSongs} />

      <div className="mt-15 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:text-left">
          All Songs
        </h2>

        <div className="flex gap-2 self-end">
          <button
            onClick={() => setSortOrder(o => (o === "asc" ? "desc" : "asc"))}
            className="px-3 py-1 border rounded text-sm hover:bg-gray-100 transition cursor-pointer"
          >
            Sort {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>

        {songs.map(song => (
          <div
            key={song._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border p-4 rounded-lg shadow-sm bg-white"
          >
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{song.title}</h3>
              <p className="text-gray-600 mt-1">{song.lyrics}</p>
            </div>

            <div className="flex gap-3 mt-3 sm:mt-0">
              <button
                onClick={() => setEdit(song)}
                className="px-3 py-1 border rounded hover:bg-gray-100 transition cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => deleteSong(song._id)}
                className="px-3 py-1 border rounded text-red-600 hover:bg-red-50 transition cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className={`px-4 py-2 border rounded 
            ${page === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
        >
          ←
        </button>

        <span className="px-4 py-2 border rounded bg-gray-50">
          {page}
        </span>

        <button
          onClick={() => setPage(p => p + 1)}
          disabled={songs.length < limit}
          className={`px-4 py-2 border rounded 
            ${songs.length < limit ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
        >
          →
        </button>
      </div>



      {editSong && (
        <EditModal
          item={editSong}
          type="song"
          onClose={() => setEdit(null)}
          onSuccess={fetchSongs}
        />
      )}
    </div>
  )
}