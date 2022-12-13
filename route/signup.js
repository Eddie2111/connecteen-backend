const express = require('express');
const router = express.Router();
const sendGridMailer = require('../middleware/sendGrid');
const {User} = require('../model/userData');
const sendingCookie = require('../data/config');
const {validateSignUp,schema} = require('../controllers/signupValidator');

const username = ()=>{
    let r = (Math.random() + 5).toString(36).substring(2);
    var now = Date.now().toString()
    var username = r+now;
    return username;
}
const { signupFail, mailExists, netError, improperInput } = require('../controllers/messages');
const { createCode, createOne, deleteCode, findOne } = require('../model/prisma');


router
    .route('/')
    .get((req,res)=>{
        res.send('/signup');
    })
    .post(async(req,res)=>{
        const {name,email,password,location} = req.body;
        console.log(req.body);
        //validation
        const dataSet = schema.validate(validateSignUp({ name:name, email:email, password:password }));
        if (!location || !name || !email || !password || dataSet.error) {
            console.log('avoided request')
            res.json({state:"request rejected",data:dataSet.error._original,message:improperInput});
            //avoiding
        }
        if(!dataSet.error){
            try{

                // validation
                const code = Math.floor((Math.random() * 9000) + 1000);
                const purfiedData = {
                    username:username(),
                    fullname:dataSet.value.name,
                    email:dataSet.value.email,
                    password:dataSet.value.password,
                    location:location
                }
                // validation

                // injecting into auth DB
                await createOne(purfiedData)
                    .then(async(result)=>{
                        if(result.code === 'P2002'){
                            // check if the account exists with NOSQL data
                            findOne(dataSet.value.email)
                                .then((result)=>{
                                    console.log(result)
                                    User.findOne({username:String(result.username)}).then((result=>{
                                            if(result.isConfirmed===true){
                                                res.json({state:"request rejected",data:result,message:mailExists,route:"/login"})
                                            }
                                            if(result.isConfirmed===false){
                                                res.json({state:"request rejected",data:result,message:mailExists,route:"/verify"})
                                            }
                                        }
                                    ))
                                    .catch((err)=>{
                                        res.json({state:"request rejected",data:err,message:mailExists,phase:520})
                                    })
                                    
                                })
                                .catch(err=>{res.json({error:{netError},phase:510})})
                        }
                        if (result.code === undefined){
                            // clean exit → send verification code 
                            await createCode({
                                email:email,
                                code:code,
                                createdAt:parseInt(String(new Date().getTime()).slice(0,10)),
                                expiredAt:parseInt(String(new Date().getTime()+1200000).slice(0,10))
                            })
                            .then((result1)=>{
                                //sendgrid mail
                                //sendGridMailer(code,email) // →  uncomment this line to send mail
                                const data = new User({
                                    isConfirmed: false,
                                    username:purfiedData.username,
                                    firstname:purfiedData.fullname
                                });
                        //added nosql query: verification:true
                                data.save(data)
                                .then(result => {
                                    //res.header('fullname',name,sendingCookie)
                                    res.json({message:'success',email:email,data:{result},route:"/verify"})
                                })
                                .catch(err => res.json({state:"request rejected",message:[netError,err]}))
                            })
                            .catch((err)=>{
                                console.log(err);
                                res.json({state:"request rejected",message:netError});
                            })
                        }
                    })

                    .catch((err)=>{
                        console.log(err);
                        res.json(netError);
                    });

            }
            catch(err){
                console.log(err);
            }
            //avoiding
        }

    });
        
module.exports = router;