const doctors = require("../mongooseSchemas/docReg");


async function getAllDoc() {

    const doc = await doctors.find()
    return doc;

};

async function getOne(id) {
    
    const doc = await doctors.findById({_id: id})

    return doc
}


module.exports = {
    getAllDoc,
    getOne,
}