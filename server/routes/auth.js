const express = require('express')
const auth = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const sanitize = require('mongo-sanitize')
const {Admin} = require('../models/schemas')

auth.post('/', async (req, res) => {
    try {
        const { user, pass } = sanitize(req.body)
        let sesh = req.session
        sesh.loggedIn = false
        const foundUser = await Admin.findOne({name: user})
        if (foundUser) {
            const match = await bcrypt.compare(pass, foundUser.password);
            if (!match) return res.status(401).json({ message: "Invalid credentials" })
            sesh.loggedIn = true
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
