const express = require('express');
const router = express.Router();

const {User} = require('../model/userData');

const { findCode, deleteCode, findOne } = require('../model/prisma');
const { verification } = require("../controllers/verificationValidator");
const { verificationSuccess,verificationFail, wrongCode } = require("../controllers/messages");

router
    .route('/')
    .get((req,res)=>{
        res.send('/connecteen');
    })
    
    .post(async(req,res)=>{
        const code = req.body.code;
        const email = req.body.email.toString();
        const {error} = verification.validate({email,code});
        console.log(code,email);
        const message = {...wrongCode, reason:"inappropriate code"};
        if (error) {
            console.log(error)
            res.send(message);
        }
        if(!error){
            await findCode({"email":email})
            .then((result)=>{
                if(result.code===code){
                    deleteCode(email)
                    findOne(email)
                    .then((result)=>{
                        User.findOneAndUpdate({email:result.email},{$set:{isConfirmed:true}})
                        .then(res=>console.log(res))
                        .catch(err=>console.log(err))
                    })
                    .catch((err)=>{
                        console.log("phase:x1")
                        res.send({error:err,phase:510})
                    })
                    res.json({state:"request accepted",message:verificationSuccess,route:"/login"})
                }
                else{
                    res.json({state:"request rejected",message:wrongCode,route:"/signup"})
                }
            })
            .catch((err)=>{
                res.json(
                        {
                            status:400,
                            message:verificationFail,
                            reason:err
                        }
                    );
            })
  
            }

            
        

        });
            
        
module.exports = router;