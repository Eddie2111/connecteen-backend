const express = require('express');
const router = express.Router();

const {verificationOutput} = require('../model/verification');
const { verification } = require("../controllers/verificationValidator");
const { verificationSuccess,verificationFail, wrongCode } = require("../controllers/messages");
const {User} = require('../model/auth');
router
    .route('/')
    .get((req,res)=>{
        res.send('/connecteen');
    })
    
    .post((req,res)=>{
        const {code, email} = req.body;
        const {error} = verification.validate({email,code});
        console.log(code,email);
        const message = {...wrongCode, reason:"inappropriate code"};
        if (error) {
            console.log(error)
            res.send(message);
        }
        else {
            verificationOutput.findOneAndDelete({email: email,code:code}).then(result=>{
                if (result) {
                    console.log(result);
                    const filter = {email: result.email};
                    const update = {isConfirmed: true};
                    console.log(filter,update);
                    User.findOneAndUpdate(filter,update).then(result=>{
                        console.log(result);
                        res.send(verificationSuccess);
                    }).catch(err=>{
                        console.log(verificationFail);
                    });
                }
                else {
                    res.send(message);
                }
            }).catch(err=>{
                console.log(err);
            }
            
            );
        }
    });
        
module.exports = router;