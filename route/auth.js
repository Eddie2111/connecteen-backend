const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const redis   = require('../model/redis');
const data = {
    title: "welcome",
    codeVersion: "10.10.10",
    code:200
};
router
    .route('/')
    .get((req,res)=>{
        const cookies = req.cookies;
        // decode the token
        try{
            console.log(cookies)
            const decoded = jwt.verify(cookies.connectId, process.env.SECRET);
            const username = jwt.verify(decoded.token,process.env.SECRET);
            redis.hgetall(username,(err,result)=>{
                const resIat = result.iat;
                const resExp = result.exp;
                if(resExp.toString() === decoded.exp.toString()){
                    res.json(data)
                }
            })
        }
        catch{
            res.json({status:"on test",code:400, data:"data"})
        }
        // check if token is valid
        // decrypt token
        // check if it's on redis
        //console.log(cookies.connectId);
        
        
        
    })
    .post((req,res)=>{
        res.json(
            data
        );
    });
        
module.exports = router;