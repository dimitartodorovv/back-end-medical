const mongoose = require("mongoose");


const reserveTime = new mongoose.Schema({
    doctorName: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    hour: {
        type: String,
        require: true
    },
    patientName: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Types._ObjectId,
        ref: "session"
    }
})


module.exports = mongoose.model("reserveTime", reserveTime)