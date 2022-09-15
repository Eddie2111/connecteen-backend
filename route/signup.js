const express = require('express');
const router = express.Router();
const {mailerAlpha,mailerOmega} = require('../middleware/nodemailer');
const {verificationInput} = require('../model/verification');
const {User} = require('../model/auth');
const {validateSignUp,schema} = require('../controllers/signupValidator');

const username = ()=>{
    let r = (Math.random() + 5).toString(36).substring(2);
    var now = Date.now().toString()
    var username = r+now;
    return username;
}
const { signupFail, mailExists, netError, improperInput } = require('../controllers/messages');

router
    .route('/')
    .get((req,res)=>{
        res.send('/signup');
    })
    .post((req,res)=>{
        const {error,value} = schema.validate(req.body);
        if(error){
            const message = {...improperInput, reason: error.details[0].message};
            res.status(400).send(message);
        }
        else{
            const validated = validateSignUp(req.body);

            const data = {
                username:username(), 
                isConfirmed:false,
                ...validated};
            console.log("stage-1 complete");
            const user = new User(data);
            user.save().then(result=>{
                // success
                console.log("stage-2 complete");
                const code = Math.floor(Math.random() * (9999 - 1000) + 1000);
                const verification = new verificationInput({
                    code: code,
                    email: data.email
                });
                verification.save();
                console.log("stage-3 complete");
                //try{mailerAlpha(code,validated.email),console.log("ok"),console.log("stage-4 complete")}
                //catch(err){console.log(err),console.log("stage-4 complexity");}
                res.json({result,value});
            }).catch(err=>{
                if (err.code===11000){
                    res.status(400).send(mailExists);
                    console.log("stage-5 complexity");
                }
                else{
                    res.status(404).send({netError,err});
                    console.log("stage-5 complexity");
                }
            }
            );
        }
    });
        
module.exports = router;