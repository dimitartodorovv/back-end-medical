const router = require("express").Router();

const isRegister = require("../middleWares/isRegister");
const patient = require("../service/patientFn");
const time = require("../service/appointmentFn");

router.post("/",isRegister,(req,res) => {

    
    patient.appointmentDate(req.body)
        .then(data => {
            res.status(200).json({data})
        }).catch(err => {
            res.status(404).json({error: err.message})
        })

});

router.get("/:id", isRegister, (req,res) => {

    const id = req.params.id;
    
        time.getAppointment(id).then(data => {
          
            res.status(200).json(data)
        }).catch(err => {
          
            res.status(404).json({error: err.message})
        })
});


module.exports = router;
