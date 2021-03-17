const mongoose = require("mongoose");


const userProfile = new mongoose.Schema({

    dateOfBirth: {
        type: String
    },
    gender: {
        type: String
    },
    height: {
        type: String
    },
    bloodType: {
        type: String
    },
    eyeColor: {
        type: String
    },
    hairColor: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "session"
    }



});

module.exports = mongoose.model("userProfile", userProfile);