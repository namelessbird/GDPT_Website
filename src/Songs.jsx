import React from 'react'
import Song from './Song'
import Footer from './Footer'
import api from './axios'

export default function Songs(){
    const [songs, setSongs] = React.useState([])

    const fetchSongs = async () => {
        const res = await api.get('http://localhost:4000/songs/desc')
        .catch((err) => console.log("Error fetching songs: ", err))
        setSongs(res.data)
        console.log(res.data)
    }

    React.useEffect(() => {
        fetchSongs()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 sm:pt-[8.333vh]">
            <main className="flex-1 px-4 py-6 sm:px-8 lg:px-20">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Bài Hát Sinh Hoạt
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {songs.map(song => (
                        <Song
                            title = {song.title}
                            lyrics = {song.lyrics}
                        />
                    ))}

                </div>
            </main>

            <Footer />
        </div>
    )
}
