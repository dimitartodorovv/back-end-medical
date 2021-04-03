const routes = require("express").Router();


const homePage = require("./controllers/home");
const registration = require("./controllers/registration");
const doctros = require("./controllers/doctors");
const patient = require("./controllers/patient");
const appointmentTime = require("./controllers/appointment");



routes.use('/', homePage);
routes.use("/doctors", doctros);
routes.use("/auth", registration);
routes.use("/patient", patient);
routes.use("/appointment",appointmentTime);


module.exports = routes;