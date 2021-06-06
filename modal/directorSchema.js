const mongoose = require('mongoose');
const directorSchema = new mongoose.Schema({
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
    }

});

const Director = mongoose.model('director', directorSchema);
module.exports = Director;