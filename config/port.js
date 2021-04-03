const config = {
    development : {
        port:  5050
    },
    production: {
        port: 80,
        mongooCN: `mongodb+srv://Dimitar:1q2w3e4r@cluster0.1atc3.mongodb.net/docCon?retryWrites=true&w=majority`
    } 

}

module.exports = config[process.env.NODE_ENV.trim()];