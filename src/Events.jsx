import React from 'react'
import api from './axios'
import { Carousel } from 'bootstrap'

export default function Events(){
    const [events, setEvents] = React.useState([])

    const fetchEvents = async () => {
        try {
            const res = await api.get('http://localhost:4000/events/asc/future')
            setEvents(res.data)
        } catch (err) {
            console.error("Error fetching events: ", err)
        }
    }

    React.useEffect(() => {
        fetchEvents()
    }, [])

    return(
        <Carousel>
            
        </Carousel>
    )
}