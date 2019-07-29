const express = require('express')
const app = express()
const port = 3000
const db = require('./queries')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)



// /* CALLBACK DEFINES */
app.get('/', (request, response) => {
    response.json({ info: 'Welcome to Honeywell Flight Plan app!' })
})
app.get('/findbyname/:name', db.findByName)
app.get('/removeplane/:name', db.removePlane)
app.post('/addplane', db.addPlane)
app.listen(port, () => {
    console.log(`Honeywell Flight Plan app running on port ${port}.`)
})