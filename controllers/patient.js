const router = require("express").Router();

const isRegister = require("../middleWares/isRegister");
const patientsData = require("../service/patientFn");

router.post("/", isRegister, (req,res) => {


    patientsData.addUserData(req.body).then(data => { 
        
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).json({error: err.message})
    });

});

router.get("/:id",isRegister,(req,res) => {
    const id = req.params.id;

    patientsData.getSettings(id).then(data => {
            
        res.status(200).json({data})
    }).catch(err => {
        res.status(404).json({error: err.message})
    });

});


router.post("/edit/:id", isRegister, (req,res) => {
 

    const id = req.params.id;
    const data = req.body;
    
        patientsData.changeSetings(data,id).then(data => {
            
            res.status(200).json({data})
        }).catch(err => {
            res.status(404).json({error: err.message})
        });
});


module.exports = router;



