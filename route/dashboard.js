const express = require('express');
const router = express.Router();
const tokenAuth = require('../controllers/tokenAuth');
const {wrongToken,tokenSuccess} = require('../controllers/messages');
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
        res.send(tokenSuccess);
    })
    .post(async(req,res)=>{
        const {token} = req.body;
        const result = await tokenAuth(token);
        console.log(result)
        if(result===true){
            res.json({...archivedGet,get:req.body,...tokenSuccess});
        }
        else{
            res.json({message:"You are not authorised to access this page",...wrongToken});
        }

    })
        
module.exports = router;