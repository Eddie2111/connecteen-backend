const express = require('express');
const router = express.Router();
const {User} = require('../model/userData');
const jwt = require('jsonwebtoken');

router
    .route('/')
    .get(async(req,res)=>{
        const id = req.cookies.connectId;
        console.log(id);
        await User.findOne({username: username})
        .then((result)=>{
                res.json(result);
        })
        .catch((err)=>{
            console.log(err);
        });
    })
    .post((req,res)=>{
        res.json(
            data
        );
    });
        
module.exports = router;