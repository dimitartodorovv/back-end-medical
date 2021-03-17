const doctors = require("../mongooseSchemas/docReg");


async function getAllDoc() {

    const doct = await doctors.find()

    return doct
}


module.exports = {
    getAllDoc,
}