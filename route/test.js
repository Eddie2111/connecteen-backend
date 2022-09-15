const express = require('express');
const router = express.Router();

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
        res.json({...archivedGet,get:req.body});
    })
    .post((req,res)=>{
        const sum = {...archivedPost,post:req.body};
        console.log(sum,req);
        res.json(req);
    });
        
module.exports = router;