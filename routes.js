const routes = require("express").Router();


const homePage = require("./controllers/home");
const registration = require("./controllers/registration");
const doctros = require("./controllers/doctors");
// const moviePage = require("./controllers/movie");


routes.use('/', homePage);
routes.use("/doctors", doctros);
routes.use("/auth", registration);


module.exports = routes;