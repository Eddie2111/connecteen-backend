

const {serialize} = require('cookie');
const {HTTP_STATUS_CODES} = require('http-status-enum');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { userOne } = require('../model/auth');
const {validateSignUp,schema} = require('../controllers/signupValidator');

router
    .route('/')
    .get((req,res)=>{
        res.json({...archivedGet,get:req.body});
    })
    .post((req,res)=>{
      const {error,value} = schema.validate(req.body);
      userOne.findOne({email:req.body.email}).then(result=>{
        console.log("Stage-1 completed")
        bcrypt.compare(value.password, result.password).then((isMatch) => {
        console.log("Stage-2 completed")
        if (isMatch) {
          const token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
              username: result.username,
              email:result.email
            },
            process.env.secret
          );
      
          const serialised = serialize("OursiteJWT", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });
          const serialisedd = ({
            token: token,
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
          });

          console.log("Stage-3 completed")

          res.setHeader("Set-Cookie", serialised);
          console.log("Stage-4 completed")
          res.status(200).json({ message: "Success!",result:result,status:"success",serialised:serialisedd,token:token });
          console.log("Stage-5 completed")
        } 
        else {
          res.json({
            status: 'error',
            error: 'Password and email does not match.',    
          });
          console.log("Stage-5 complexity")

        }
      });
      
    })

    });
        
module.exports = router;


/*
previous version
 const payload = {
            id: result.username,
            email: result.email,
            fullname: result.name,
          };
          jwt.sign(
            payload,
            process.env.secret,
            {expiresIn: 60 * 60 * 24 * 30,},(_err, token) => {
              console.log("Stage-3 completed")
              const serialized = serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 30,
                path: '/',
              });
              console.log("Stage-4 completed")
              res.setHeader('Set-Cookie', serialized);
              res.json({
                success: true,
                user: {
                  email: payload.email,
                  username: payload.username
                },
              });
              console.log("Stage-5 completed")
            },
          );
*/