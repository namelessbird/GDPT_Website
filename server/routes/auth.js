const express = require('express')
const auth = express.Router()
const mongoose = require('mongoose')
const {Admin} = require('../models/schemas')

auth.post('/auth', async (req, res) => {
    try {
        const { user, pass } = req.body
        const foundUser = await Admin.findOne({ name: user, password: pass })
        if (foundUser) {
            res.status(200).json({ message: "Login successful"})
        } else {
            res.status(401).json({ message: "Invalid username or password" })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = auth
