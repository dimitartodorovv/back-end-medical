
const router = require("express").Router();


// const isGuest = require("../middleWares/isGuest");
const allDoctors = require("../service/docFn");

router.get("/", (req,res) => {

    allDoctors.getAllDoc().then(data => {
       
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).json({error:"Can't load data!"})
    })

});


module.exports = router;