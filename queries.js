/* MONGOOSE SETUP */
const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/flight-plan'
mongoose.connect(uri, {useNewUrlParser: true})
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${uri}`)
})
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err)
})
const planeSchema = new mongoose.Schema({ 
    name: String, 
    tail: String,
    date: String, 
    condition: String 
})
const planes = mongoose.model('planes', planeSchema)

/* CALLBACK DEFINES */
const findByName = (req, res) => {
    planes.findOne({name: req.params.name}, (error, results) => {
        if (error) {
            throw error
        }
        console.log(results)
        res.status(200).json(results)
    })
}

const removePlane = (req, res) => {
    Plane.deleteOne({name: req.params.name}, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results)
    })
}

const addPlane = (req, res) => {
    const newPlane = {
        name: req.body.name,
        tail: req.body.tail,
        date: req.body.date,
        condition: req.body.condition
    }
    mongoose.connection.collection('planes').insertOne(newPlane), (error, res)=> {
        if (error) throw error
    }
    res.status(200).send('Successfully added new plane')
}

module.exports = {
    findByName,
    addPlane,
    removePlane
}