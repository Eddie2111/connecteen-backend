const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');
const redis   = require('../model/redis');
const {wrongToken} = require('../controllers/messages');
const {User} = require('../model/userData');
const data = {
    title: "welcome",
    codeVersion: "10.10.10",
    code:200
};
const dataNO = {
    title: "welcome",
    codeVersion: "10.10.10",
    code:200,
    route:"/welcomeForm"
};

router
    .route('/')
    .get((req,res)=>{
        const cookies = req.cookies;
        // decode the token
        try{
            const decoded = jwt.verify(cookies.connectId, process.env.SECRET);
            const username = jwt.verify(decoded.token,process.env.SECRET);
            redis.hgetall(username,(err,result)=>{
                const resIat = result.iat;
                const resExp = result.exp;
                User.findOne({username:username})
                .then((resultNO)=>{
                    if(resExp.toString() === decoded.exp.toString() && resultNO.schoolName){
                        res.json(data)
                    }
                    if(resExp.toString() === decoded.exp.toString() && !resultNO.schoolName){
                        res.json(dataNO)
                    }
                    if(resExp.toString() !== decoded.exp.toString()){
                        res.json(wrongToken);
                    }
                })

                
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