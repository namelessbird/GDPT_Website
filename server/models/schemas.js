const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: {type:String},
    password: {type:String}
})

const eventSchema = new mongoose.Schema({
    name: {type:String},
    description: {type:String},
    date: {type:Date}
})

const songSchema = new mongoose.Schema({
    title: {type:String},
    lyrics: {type:String}
})

const Admin = mongoose.model("Admin", adminSchema, "Admins")
const Event = mongoose.model("Event", eventSchema, "Events")
const Song = mongoose.model("Song", songSchema, "Songs")
const mySchemas = {Admin, Event, Song}
module.exports = mySchemas