const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const configCors = require("./corsConfig");
const { urlencoded } = require("express");

module.exports = (app) => {

    app.use(express.json());

    app.use(urlencoded({extended: true}));

    app.set('trust proxy', true);

    
    app.use(cors({
      "origin": configCors.corsOptions.origin,
      "methods": configCors.methods,
      "credentials": true,
      
    }));
    
    app.use(cookieParser());

  }
