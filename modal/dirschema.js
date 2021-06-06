const mongoose = require('mongoose');
const dirSchemaWithMovies = new mongoose.Schema({
    name : {
        type: String,
        unique: true
    },
    age : {
        type: Number,
    },
    gender : {
        type: String,
    },
    dirimg : {
        type: String,
    },
    awardCount : {
        type: Number
    },
    movies: {
        type : Array
    }

});

const Director = mongoose.model('dirSchemaWithMovies', dirSchemaWithMovies);
module.exports = Director;