const mongoose = require("mongoose");

const refreshToken = new mongoose.Schema({
        user: {
            type: mongoose.Types.ObjectId,
            ref: "session"
        },
        token: {
            type: String
        },
        expires: {
            type: Date,
        },
        created: {
            type: Date,
            default: Date.now
        },
        createdByIp: {
            type: String
        },
        revoked: {
            type: String
        }, 
        revokedByIp: String,
        replacedByToken: String


});

refreshToken.virtual('isExpired').get(function () {
    return Date.now() >= this.expires;
});

refreshToken.virtual('isActive').get(function () {
    return !this.revoked && !this.isExpired;
});


module.exports = mongoose.model("RefreshToken", refreshToken)