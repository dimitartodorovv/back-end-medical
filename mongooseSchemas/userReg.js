const mongoose = require("mongoose");


const userSession = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true
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
        type: String
    },
});

module.exports = mongoose.model("session", userSession);