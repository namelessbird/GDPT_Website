const express = require('express')
const song = express.Router()
const mongoose = require('mongoose')
const sanitize = require('mongo-sanitize')
const {Song} = require('../models/schemas')
const requireAdmin = require('../loginFilter')

song.get('/', requireAdmin, async (req, res) => {
    try{
        const allEvents = await Song.find().lean()
        res.status(200).json(allEvents)
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

song.get('/:sort', requireAdmin, async (req, res) => {
    try{
        const { sort } = sanitize(req.params)
        const page = parseInt(sanitize(req.query.page)) || 1
        const limit = parseInt(sanitize(req.query.limit)) || 5

        const skip = (page - 1) * limit
        const sortNum = sort === "asc" ? 1 : sort === "desc" ? -1 : null
        if (sortNum === null) {
            return res.status(400).json({ message: "Invalid sort option" })
        }

        const now = new Date()
        let query = {}

        const allSongs = await Song
            .find()
            .sort({ title: sortNum })
            .skip(skip)
            .limit(limit)
            .lean()

        res.status(200).json(allSongs)
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

song.post('/', requireAdmin, async (req, res) => {
    try{
        const {title, lyrics} = sanitize(req.body)
        await Song.create({title, lyrics})
        res.status(201).json({ message: "Added song successfully"})
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

song.delete('/:id', requireAdmin, async (req, res) => {
    try{
        const id = sanitize(req.params.id)

        if(!id){
            return res.status(400).json({ message: "Song ID required" })
        }

        const deleted = await Song.findByIdAndDelete(id)

        if (!deleted) {
            return res.status(404).json({ message: "Song not found" })
        }
        res.status(200).json({ message: "Song deleted successfully" })
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

song.post('/update', requireAdmin, async (req, res) => {
    try{
        const {id, title, lyrics} = sanitize(req.body)
        await Song.findByIdAndUpdate(id, {title, lyrics})
        res.status(200).json({ message: "Song updated successfully" })
    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = song