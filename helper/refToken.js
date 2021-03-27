const refreshToken = require("../mongooseSchemas/refToken");
const jwt = require("jsonwebtoken");
const userSession = require("../mongooseSchemas/userReg");
const {refreshTokenUser,tokenMaker} = require("./tokenMaker");
const {SECRET_KEY} = require("../config/config");


module.exports = async function (token,id) {

    console.log(id);
    const refToken = await refreshToken.findOne({ user: id });
    console.log(refToken);
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
    
       const decoded =  jwt.decode(token,SECRET_KEY);
          
       const user = await userSession.findOne({_id: decoded.id});  
        console.log(user);
       if(!user) {
            throw new Error()
        }
        
       const newToken = tokenMaker({decoded});

       return newToken
   } catch (error) {
      
        return  {error: "You are not authorized!"}
     
   }

  

    

}