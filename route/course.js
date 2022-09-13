const express = require('express');
const router = express.Router();
const {courses,indexing} = require('../data/course');

const data = {
    title: "welcome",
    message: "data came from node backend",
    version: "10.10.10"
};
router
    .route('/')
    .get((req,res)=>{
        res.send('/connecteen');
    })
    .post((req,res)=>{
        const x = req.body.id;
        res.json(indexing(x,courses));
    });
        
module.exports = router;