const { COOKIE_NAME, SECRET_KEY, REFRESH_TIME } = require("../config/config");
const jwt = require('jsonwebtoken');
const { messageError, typeError } = require("../helper/errorHandler");
const timeForRefToken = require("../config/tokenRefreshTime");
const refUserToken = require("../helper/refToken");
const verifyUser = require("../helper/verifyUser");


module.exports = async function (req, res, next) {

    console.log("REGISTER AUTHENTICATION");

    const token = req.cookies[COOKIE_NAME];
    console.log(token);
    let checkForNewCookie = false;
    let stats = '';
    let dec = {
        exp: -116309
    };
    if (!token) {
        res.status(typeError(404)).json(messageError("You are not authorized!"));
        return
    }

    try {
    
        dec = jwt.verify(token, SECRET_KEY);
        
    } catch (error) {

        console.log("RES");
        dec.exp = -116304
    }
    
    if (timeForRefToken(dec.exp) >= REFRESH_TIME) {

        const restart = jwt.decode(token,{complete: true})
 

        const result = await refUserToken(token, restart.payload.id)
            console.log(result,"FOR REFRESH TOKEN");
        if (result.error) {
            console.log("ERROR_REFRESH TOKEN");
            res.clearCookie(COOKIE_NAME)
            res.status(typeError(404)).json(messageError(result.error));

            return
        }
        console.log("REFRESH TOKEN NOW");
        const newToken = result;
        
        res.cookie(COOKIE_NAME,newToken);
        checkForNewCookie = false;
    }
    
        stats = await verifyUser(token);   

    if (checkForNewCookie && stats.error) {
        console.log("DELETE COOKIE");
        res.clearCookie(COOKIE_NAME)
        res.status(typeError(404)).json(messageError(stats.error));

        return
    }

   
    next()
}