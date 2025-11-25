const express = require('express')
const router = express.Router()

router.get('/events', (req, res) => {
    const allEvents = [
        {
            "id": 1,
            "name": "Event 1"
        },
        {
            "id": 2,
            "name": "Event 2"
        }
    ]
    res.send(allEvents)
})

module.exports = router