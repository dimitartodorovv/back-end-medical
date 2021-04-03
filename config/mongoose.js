const mongoose = require("mongoose");
const mon = require("../config/port")

module.exports = () => {

    const uri = "mongodb://localhost/docCon";
    mongoose.connect(mon.mongooCN || uri,  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log(`Connect DB`);
    });
}

