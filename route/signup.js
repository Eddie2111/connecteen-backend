const express = require('express');
const router = express.Router();
const sendGridMailer = require('../middleware/sendGrid');
const {verificationInput} = require('../model/verification');
const {userAuth} = require('../model/auth');
const sendingCookie = require('../data/config');
const {validateSignUp,schema} = require('../controllers/signupValidator');

const username = ()=>{
    let r = (Math.random() + 5).toString(36).substring(2);
    var now = Date.now().toString()
    var username = r+now;
    return username;
}
const { signupFail, mailExists, netError, improperInput } = require('../controllers/messages');
const { createCode, createOne, deleteCode } = require('../model/prisma');

router
    .route('/')
    .get((req,res)=>{
        res.send('/signup');
    })
    .post((req,res)=>{
        const {name,email,password,location} = req.body;
        console.log(req.body);
        //validation
        if (!location){
            console.log('avoided request')
            //avoiding
        }
        if (location){
            console.log('request accepted');
            try{
                const data = {
                    name:name,
                    email:email,
                    password:password
                }
                const dataSet = schema.validate(validateSignUp(data));
                const purfiedData = {
                    username:username(),
                    fullname:dataSet.value.name,
                    email:dataSet.value.email,
                    password:dataSet.value.password,
                    location:location
                }
                const code = Math.floor((Math.random() * 9000) + 1000);
                //user created
                createOne(purfiedData)
                .then((result)=>{
                    // create code
                    createCode({
                        email:email,
                        code:code,
                        createdAt:parseInt(String(new Date().getTime()).slice(0,10)),
                        expiredAt:parseInt(String(new Date().getTime()+1200000).slice(0,10))
                    }) // on success creating code at first attempt
                    .then(()=>{
                        // send mail
                        // sendGridMailer(email,code)
                            res.header('fullname',name,sendingCookie)
                            res.json({message:'success',email:"test@example.com1"})
                    }) // on failure creating code at first attempt
                    .catch((err)=>{
                        deleteCode(email)
                        .then(()=>{
                            createCode({
                                email:email,
                                code:code,
                                createdAt:parseInt(String(new Date().getTime()).slice(0,10)),
                                expiredAt:parseInt(String(new Date().getTime()+1200000).slice(0,10))
                            })
                            .then(()=>{
                                // send mail
                                // sendGridMailer(email,code)
                                res.header('fullname',name,sendingCookie)
                                res.json({message:'success',email:"example.com2"})
                            })
                            .catch((err)=>{
                                res.status(500).json({message:netError,reason:"core server connection error","level":"5"})
                            })
                        })
                    })
                })
                .catch((err)=>{
                    console.log(err.code);
                    res.json({"message":'notworking'})
                }
                )
            }
            catch(err){
                console.log(err,"yoo this works???");
                res.json(signupFail);
            }   
        }
    });
        
module.exports = router;