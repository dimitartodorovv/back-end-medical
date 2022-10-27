const config = {
    development : {
        port:  5050
    },
    production: {
        port: 80,
        mongooCN: ``
    } 

}

module.exports = config[process.env.NODE_ENV.trim()];
