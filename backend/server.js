const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const carRoutes = express.Router();
const PORT = 4000;

let Car = require('./car.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/cars', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

carRoutes.route('/').get(function(req, res) {
    Car.find(function(err, cars) {
        if (err) {
            console.log(err);
        } else {
            res.json(cars);
        }
    });
});

carRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Car.findById(id, function(err, car) {
        res.json(car);
    });
});

carRoutes.route('/add').post(function(req, res) {
    let car = new Car(req.body);
    car.save()
    .then(car => {
        res.status(200).json({'car': 'car added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new car failed');
    });
});

app.use('/cars', carRoutes);


app.listen(PORT, function() {
    console.log("Server is running in Port: " + PORT);
})