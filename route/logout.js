const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const redis = require('../model/redis');
const data = {
    title: "welcome",
    message: "data came from node backend",
    version: "10.10.10"
};
const archivedGet = {...data,test:true,Status:"GET"};
const archivedPost = {...data,test:true,Status:"Post"};

router
    .route('/')
    .get((req,res)=>{
        const sum = {...archivedPost,post:req.body};
        const connectID = req.cookies.connectID;
        try{
            console.log(connectID);
            const userIDtoken = jwt.verify(connectID,process.env.SECRET);
            redis.del(userIDtoken);}
            catch(er){
                console.log(er);
            }
        res.clearCookie('connectId',{ path: '/', secure: true, httpOnly: true });
        res.clearCookie('rememberme',{ httpOnly: true, secure:true });
        res.end();
    })
    .post((req,res)=>{
        res.send("unauthorized");

    });
        
module.exports = router;