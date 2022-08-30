const express = require('express');
const router = express.Router();


const {verification} = require("../controllers/verificationValidator");

const { verificationSuccess, wrongCode } = require("../controllers/messages");

router
    .route('/')
    .get((req,res)=>{
        res.send('/connecteen');
    })
    
    .post((req,res)=>{
        const {code, email} = req.body;
        const {error} = verification.validate({code});
        console.log(code,email);
        const message = {...wrongCode, reason:"inappropriate code"};
        if (error) {
            res.send(message);
        }
        else {
            res.send(verificationSuccess);
        }
    });
        
module.exports = router;