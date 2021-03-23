const userProfile = require("../mongooseSchemas/userProfile");


async function addUserData(data) {

    const user = await new userProfile(data);

    return user.save()

};


async function getSettings(id) {

    const user = await userProfile.findOne({userID: id})

    return user
};

async function changeSetings(data,id) {
    
    const user = await userProfile.findOneAndUpdate({userID: id},data)
    
    return user
}


module.exports = {
    addUserData,
    getSettings,
    changeSetings
}