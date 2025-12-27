import React from 'react'
import api from './axios'

export default function Events() {
    const [events, setEvents] = React.useState([])
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isPaused, setIsPaused] = React.useState(false)
    const apiUrl = import.meta.env.VITE_API_URL

    React.useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await api.get(`${apiUrl}/events/asc/future`)
                setEvents(res.data)
            } catch (err) {
                console.error("Error fetching events: ", err)
            }
        }
        fetchEvents()
    }, [])

    React.useEffect(() => {
        if (events.length > 0 && !isPaused) {
            const interval = setInterval(() => {
                nextSlide()
            }, 5000) 

            return () => clearInterval(interval)
        }
    }, [events, activeIndex, isPaused])

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))
    }

    if (events.length === 0) return (
        <div className="relative w-full px-4 py-8">
            <div className="relative h-72 md:h-96 flex flex-col items-center justify-center rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200">
                <div className="mb-4 text-gray-300">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-600">Hiện không có sự kiện nào sắp tới</h3>
            </div>
        </div>
    )

    return (
        <div 
            className="relative w-full px-4 py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
                {events.map((event, index) => {
                    let position = "translate-x-full opacity-0"
                    if (index === activeIndex) {
                        position = "translate-x-0 opacity-100"
                    } else if (
                        index === activeIndex - 1 || 
                        (activeIndex === 0 && index === events.length - 1)
                    ) {
                        position = "-translate-x-full opacity-0"
                    }

                    return (
                        <div
                            key={event._id || index}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out p-8 text-center ${position}`}
                        >
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                                Upcoming Event
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                {event.name}
                            </h2>
                            <h3 className="text-xl text-blue-600 font-semibold mb-4">
                                {new Date(event.date).toISOString().split("T")[0]}
                            </h3>
                            <div className="max-h-40 overflow-y-auto px-4 scrollbar-thin">
                                <p className="text-gray-600 text-md">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button 
                onClick={prevSlide} 
                className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors shadow-sm"
            >
                <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m15 19-7-7 7-7"/>
                </svg>
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors shadow-sm"
            >
                <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m9 5 7 7-7 7"/>
                </svg>
            </button>
        </div>
    )
}