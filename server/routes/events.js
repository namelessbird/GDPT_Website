const express = require('express')
const event = express.Router()
const mongoose = require('mongoose')
const sanitize = require('mongo-sanitize')
const {Event} = require('../models/schemas')
const requireAdmin = require('../loginFilter')

event.get('/', requireAdmin, async(req, res) => {
    try{
        const allEvents = await Event.find().lean()
        res.status(200).json(allEvents)
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

event.delete('/:id', requireAdmin, async (req, res) => {
    try{
        const id = sanitize(req.params.id)

        if(!id){
            return res.status(400).json({ message: "Event ID required" })
        }

        const deleted = await Event.findByIdAndDelete(id)

        if (!deleted) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event deleted successfully" });
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

event.post('/', requireAdmin, async (req, res) => {
    try{
        const {title, description, date} = sanitize(req.body)
        await Event.create({name: title, description, date})
        res.status(201).json({ message: "Added event successfully"})
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = event