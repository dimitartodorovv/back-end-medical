
const router = require("express").Router();


// const isGuest = require("../middleWares/isGuest");
const isRegister = require("../middleWares/isRegister");

const doctors = require("../service/docFn");

router.get("/", (req,res) => {

    doctors.getAllDoc().then(data => {
       
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).json({error:"Can't load data!"})
    })

});

router.get("/search/:id", isRegister, (req,res) => {
    
    const id = req.params.id;
    doctors.getOne(id).then(data => {
        
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).json({error: err.message})
    })

});

router.post("/remove/hour", isRegister , (req,res) => {

    const id = req.body.docID;
    const time = req.body.time;

        doctors.delHour(id,time).then(data => {
            res.status(200).json({message: "Remove this hour"})
        }).catch(err => {
            console.log(err);
            res.status(404).json({error: err.messsage})
        })
});

module.exports = router;