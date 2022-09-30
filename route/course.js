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
        let text1 = x.toLowerCase();
        const string = text1[0].toUpperCase()+text1.slice(1, 90);
        res.json(indexing(string,courses));
    });
        
module.exports = router;