const mongoose = require("mongoose");


const doctorReg = new mongoose.Schema({
    name: {
        type: String,
      
    },
    specialty: {
        type: String,
      
    },
    expirience: {
        type: Number,
       
    },
    working: {
        type: String,
       
    },
    education: {
        type: String
    },
    workDates: [

    ],
    workHours: [
        
    ],
    biography: {
        type: String
    }

});

module.exports = mongoose.model("doctors", doctorReg)