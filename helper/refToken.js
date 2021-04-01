const refreshToken = require("../mongooseSchemas/refToken");
const jwt = require("jsonwebtoken");
const userSession = require("../mongooseSchemas/userReg");
const {refreshTokenUser,tokenMaker} = require("./tokenMaker");
const {SECRET_KEY} = require("../config/config");


module.exports = async function (token,id) {

    
    const refToken = await refreshToken.findOne({ user: id });
    
    if(!refToken) {
        return {error: "This user doesnt have token"}
    }

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    const dateNow = `${year}-${month}-${day}`
    const compDateNow = new Date(dateNow);
    const dateExp = new Date(refToken.expires);

    if(compDateNow >= dateExp) {
        refreshTokenUser()
   }


   try {
    
       const decoded =  jwt.decode(token,{complete: true});
          
       const user = await userSession.findOne({_id: decoded.payload.id});  
       
       if(!user) {
            throw new Error()
        }
        
       const newToken = tokenMaker(user);

       return newToken
   } catch (error) {
      
        return  {error: "You are not authorized!"}
     
   }

  

    

}