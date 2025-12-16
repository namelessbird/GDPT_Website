import React from 'react'
import api from  '../axios'

export default function AdminSongs(){
    const [songs, setSongs] = React.useState([])
    const [editSong, setEdit] = React.useState(null)

    React.useEffect(() => {
        fetchSongs()
    }, [])

    const fetchSongs = async () => {
        const res = await api.get("")
        setSongs(res.data)
    }

    const deleteSong = async () => {
        const res = await api.get("")
        fetchSongs()
    }

    return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Songs</h2>

      <SongForm onSuccess={fetchSongs} />

      <div className="mt-6 space-y-3">
        {songs.map(song => (
          <div key={song._id} className="flex justify-between border p-3 rounded">
            <span>{song.title}</span>
            <div className="flex gap-3">
              <button onClick={() => setEditing(song)} className="underline">
                Edit
              </button>
              <button onClick={() => deleteSong(song._id)} className="text-red-600 underline">
                Delete
              </button>
            </div>
          </div>
        ))}
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