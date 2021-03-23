const mongoose = require("mongoose");

module.exports = () => {
    
    const uri = "mongodb://localhost/docCon";
    mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log(`Connect DB`);
    });
}



