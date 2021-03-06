const express = require('express')
const app = express()
const port = 3000
const db = require('./queries')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
const cors = require('cors');
app.use(cors());
app.options('*', cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// /* CALLBACK DEFINES */
app.get('/', (request, response) => {
    response.json({ info: 'Welcome to Honeywell Flight Plan app!' })
})
app.get('/getweatherbycity/:lon/:lat', db.getWeatherByCity)
app.get('/removeplane/:name', db.removePlane)
app.get('/getallplanes', db.getAllPlanes)
app.get('/getallcoords', db.getAllCoords)
app.post('/addplane', db.addPlane)
app.post('/updateplane', db.updatePlane)
app.listen(port, () => {
    console.log(`Honeywell Flight Plan app running on port ${port}.`)
})