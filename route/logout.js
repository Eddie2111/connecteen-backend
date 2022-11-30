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
        req.session.destroy();
        res.json({...archivedGet,get:req.body});
    })
    .post((req,res)=>{
        const sum = {...archivedPost,post:req.body};
        const {connectID} = req.cookies;
        const userIDtoken = jwt.verify(connectID,process.env.SECRET);
        redis.del(userIDtoken);
        res.clearCookie('connectID');
        res.clearCookie('rememberme');
        req.session.destroy();
        res.header(sendingHeader);
        res.cookie('connectId', dataSet, { path: '/', secure: true, httpOnly: true, expires: 0 });
        res.cookie('rememberme', '1', { expires: 0, httpOnly: true, secure:true })
        res.end();

    });
        
module.exports = router;