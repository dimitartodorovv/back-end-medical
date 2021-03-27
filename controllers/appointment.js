const router = require("express").Router();

const isRegister = require("../middleWares/isRegister");


router.post("/",isRegister,(req,res) => {

    console.log(req);

});


module.exports = router;
