const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const auth = require('./routes/auth')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use('/', router)
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
