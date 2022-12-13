const express = require('express');
const router = express.Router();
const {findCode,createCode,deleteCode} = require('../model/prisma');

router
    .route('/')
    .get((req,res)=>{
        res.send('/connecteen');
    })
    .post(async(req,res)=>{
        const {email} = req.body;
        console.log(email);
        try{
            await deleteCode(email);
            const code = Math.floor((Math.random() * 9000) + 1000);
            await createCode({
                email:email,
                code:code,
                createdAt:parseInt(String(new Date().getTime()).slice(0,10)),
                expiredAt:parseInt(String(new Date().getTime()+1200000).slice(0,10))
            })
            .then((result=>{console.log(result)}))
            .catch((err)=>{console.log(err)})
        }
        catch(e){console.log(e)}
    });
            
        
    
        
module.exports = router;