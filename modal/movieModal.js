const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    moviename: {
        type: String,
        unique:true
    },
    img:{
        type: String
    },
    boxofficeCollection:{
        type: String
    },
    director: {
        type: String
    },
    dirimg:{
        type: String
    },
    rating:{
        type: Number
    }

})

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;