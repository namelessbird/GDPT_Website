const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const auth = require('./routes/auth')
const adminFilter = require('./routes/adminFilter')
const session = require('express-session')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(session(
    {
        secret:process.env.SESSION_SECRET, 
        saveUninitialized:false, 
        resave:false, 
        cookie: {
            httpOnly: true,
            secure: false,      // true breaks localhost
            sameSite: 'lax'     // allows cross-origin requests in dev
        }
    }
))

app.use('/', router)
app.use('/', adminFilter)
app.use('/', auth)

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to MongoDB:", mongoose.connection.name);

        const port = 4000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

startServer();
