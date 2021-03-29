
const doctors = require("../mongooseSchemas/docReg");


async function getAllDoc() {

    const doc = await doctors.find()
    return doc;

};

async function getOne(id) {
    
    const doc = await doctors.findById({_id: id})

    return doc
};

async function delHour(id,time) {
    

    let doctor = await doctors.updateOne({_id: id}, {$pull: {workHours: time}});
   
    return doctor
}


module.exports = {
    getAllDoc,
    getOne,
    delHour
}