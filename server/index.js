const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const auth = require('./routes/auth')
const event = require('./routes/events')
const song = require('./routes/songs')
const adminFilter = require('./routes/adminFilter')
const session = require('express-session')
require('dotenv').config()
const mongoose = require('mongoose')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const allowedOrigins = [
    "http://localhost:5173",
    "https://gdptthienquang.netlify.app"
]

const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.set("trust proxy", 1)
app.use(session(
    {
        secret:process.env.SESSION_SECRET, 
        saveUninitialized:false, 
        resave:false, 
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",      
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 * 24
        }
    }
))

// app.use('/', router)
app.use('/admin-dashboard', adminFilter)
app.use('/auth', auth)
app.use('/events', event)
app.use('/songs', song)

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to MongoDB:", mongoose.connection.name);

        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

startServer();
