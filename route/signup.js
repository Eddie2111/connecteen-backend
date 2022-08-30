const express = require('express');
const router = express.Router();
const {mailerAlpha,mailerOmega} = require('../middleware/nodemailer');

const {User} = require('../model/auth');
const {validateSignUp,schema} = require('../controllers/signupValidator');
const username = require('../modules/usernameGenerator');

const { signupFail, mailExists, netError, improperInput } = require('../controllers/messages');

router
    .route('/')
    .get((req,res)=>{
        res.send('/signup');
    })
    .post((req,res)=>{
        const {error,value} = schema.validate(req.body);
        console.log(value,username());
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
            const user = new User(data);
            user.save().then(result=>{
                // success
                try{mailerAlpha("11000",validated.email)}
                catch(err){console.log(err)}
                res.json({result,value});
            }).catch(err=>{
                if (err.code===11000){
                    res.status(400).send(mailExists);
                }
                else{
                    res.status(404).send({netError,err});
                }
            }
            );
        }
    });
        
module.exports = router;