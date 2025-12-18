const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: {type:String, required:true},
    password: {type:String, required:true}
})

const eventSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    date: {type:Date, required:true}
})

const songSchema = new mongoose.Schema({
    title: {type:String, required:true},
    lyrics: {type:String, required:true}
})

const Admin = mongoose.model("Admin", adminSchema, "Admins")
const Event = mongoose.model("Event", eventSchema, "Events")
const Song = mongoose.model("Song", songSchema, "Songs")
const mySchemas = {Admin, Event, Song}
module.exports = mySchemas