const express = require('express');
const router = express.Router();
const sendGridMailer = require('../middleware/sendGrid');
const argon2 = require('argon2');
const data = {
    title: "welcome",
    message: "data came from node backend",
    version: "10.10.10"
};
const archivedGet = {...data,test:true,Status:"GET"};
const archivedPost = {...data,test:true,Status:"Post"};

const encrypted =  (password)=>{
    const hash = argon2.hash(password)
    .then (hash => {
        return hash;
    })
    return hash;
}

router
    .route('/')
    .get((req,res)=>{
        res.json({...archivedGet,get:req.body});
    })
    .post((req,res)=>{
        const sum = {...archivedPost,post:req.body};
        console.log(encrypted(req.body.password));
        //console.log(sum,req);
        sendGridMailer('12211',"asm.tareq.mahmood@g.bracu.ac.bd")
        res.json(req.method);
    });
        
module.exports = router;