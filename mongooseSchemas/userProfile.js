const mongoose = require("mongoose");


const userProfile = new mongoose.Schema({

    name: {
        type: String
    },
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
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "session"
    }

});

module.exports = mongoose.model("userProfile", userProfile);