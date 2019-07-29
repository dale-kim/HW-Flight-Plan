const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const db = require("./queries")
const uri = "mongodb://localhost:27017/flightplan"
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
mongoose.connect(uri, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${uri}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
app.listen(() => {
    console.log("Honeywell Flight Plan App running.")
})

