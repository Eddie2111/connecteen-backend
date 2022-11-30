const express = require('express');
const router = express.Router();

const data = {
    title: "welcome",
    message: "data came from node backend",
    version: "30.11.22"
};
router
    .route('/')
    .get((req,res)=>{
        res.send('/connecteen');
    })
    .post((req,res)=>{
        res.json(
            data
        );
    });
        
module.exports = router;