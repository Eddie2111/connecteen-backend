import { serialize } from 'cookie';
import HTTP_STATUS_CODES from 'http-status-enum';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req,res)=>{
        res.json({...archivedGet,get:req.body});
    })
    .post((req,res)=>{

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
            email: user.email,
            createdAt: user.createdAt,
            username: user.username,
            fullname: user.fullname,
          };
          jwt.sign(payload,KEY,{expiresIn: 60 * 60 * 24 * 30,},
            (_err, token) => {
              const serialized = serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 30,
                path: '/',
              });
              res.setHeader('Set-Cookie', serialized);
              res.status(HTTP_STATUS_CODES.OK).json({
                success: true,
                user: {
                  email: payload.email,
                  username: payload.username,
                  fullname: payload.fullname,
                },
              });
            },
          );
        } else {
          res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
            status: 'error',
            error: 'Password and email does not match.',
          });
        }
      });
      


    });
        
module.exports = router;


