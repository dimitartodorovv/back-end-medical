const appoitnments = require("../mongooseSchemas/reserveTime");


async function getAppointment(id) {

        const appointment = appoitnments.findOne({user: id});

        return appointment
}



module.exports = {
    getAppointment,
}