const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car =  new Schema({
    car_make: {
        type: String
    },
    car_model: {
        type: String
    },
    car_description: {
        type: String
    },
    car_mpg: {
        type: String
    },
    selected: {
        type: Boolean
    }
});

module.exports = mongoose.model('Car', Car);