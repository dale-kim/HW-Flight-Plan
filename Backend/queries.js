/* MONGOOSE SETUP */
const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/flight-plans'
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
    date: [String], 
    condition: String 
})
const planes = mongoose.model('planes', planeSchema)

/* CALLBACK DEFINES */
const findByName = (req, res) => {
    planes.findOne({name: req.params.name}, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results)
    })
}

const getAllPlanes = (req, res) => {
    planes.find({}, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results)
    })
}

const removePlane = (req, res) => {
    planes.deleteOne({name: req.params.name}, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results)
    })
}

const addPlane = (req, res) => {
    console.log(req.body)
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

const updatePlane = (req, res) => {
    mongoose.connection.collection('planes').findOneAndUpdate({name: req.body.name}, {$push:{date:req.body.date}}, (err, doc) => {
        if (err) {
            console.log("Something went wrong when updating data!");
        }
        console.log(doc);
        res.status(200).send('Successfully updated plane')
    });
}
module.exports = {
    findByName,
    addPlane,
    removePlane,
    getAllPlanes,
    updatePlane,
}

// Static pre-inserted mock database
// db.planes.insertOne({"name":"Boeing 777x","tail":"D-ABCE","date":["July 4 2019"],"condition":"good"})
// db.planes.insertOne({"name":"Airbus A380","tail":"W-XYZ","date":["December 25 2018"],"condition":"moderate"})
// db.planes.insertOne({"name":"Boeing 737 MAX","tail":"666","date":["April 20 1962"],"condition":"bad"})


