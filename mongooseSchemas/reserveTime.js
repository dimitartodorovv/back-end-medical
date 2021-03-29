const mongoose = require("mongoose");


const reserveTimeDoc = new mongoose.Schema({
    doctorName: {
        type: String,
        require: true
    },
    specialty: {
        type: String,
        require: true
    },
    docID: {
        type: mongoose.Types.ObjectId,
        ref: "doctors"
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
    visit: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "session"
    }
})


module.exports = mongoose.model("reserveTime", reserveTimeDoc)