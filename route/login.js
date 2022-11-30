const express = require('express');
const router = express.Router();
const {findOne} = require('../model/prisma');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const redis = require('../model/redis');
const {sendingHeader} = require('../data/config');
const {User} = require('../model/userData');
const {
    validateLogin,
    schema }        = require('../controllers/loginValidator');
const location = ''
router
    .route('/')
    .post(async(req,res)=>{
        const {email,password,location} = req.body;
        const user = {email,password};
        const dataSet = await schema.validate(validateLogin({ email:email, password:password }));
        if(dataSet.value){
            await findOne(dataSet.value.email)
                .then(async(data)=>{
                    if(!data){
                        //ending → no data
                        res.json({status:"on test",code:400, data:"data"})
                    }
                    if(data){
                        //ending → data found
                        await bcrypt.compare(dataSet.value.password, data.password, async function(err, result) {
                            if(err){
                                res.json({status:"on test",code:400, data:"data"})
                            }
                            if(result && location!==''){
                                //ending → password matched
                                await User.findOne({username:data.username})
                                    .then(async(user)=>{
                                        const username = data.username;
                                        const ajax = jwt.sign(username,process.env.secret);
                                        const value = {
                                            "token": ajax,
                                            "iat": Date.now(),
                                            "exp": Date.now() + 1000*60*60*24*3,
                                        }
                                        const dataSet = jwt.sign( value, process.env.SECRET);
                                        const confirmation = user.isConfirmed;
                                        redis.hmset(username, value);
                                        res.header(sendingHeader);
                                        res.cookie('connectId', dataSet, { path: '/', secure: true, httpOnly: true, expires: new Date(Date.now() + 900000) });
                                        res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true, secure:true })
                                        res.json({status:"on test",code:200, data:dataSet,isConfirmed:confirmation})

                                    })
                                    .catch((err)=>{
                                        // resend to verify
                                        res.json({status:"on test",code:400, data:"data",route:"/verify",msg:err})
                                    })
                            }
                            });

                        }
                    
                })
                .catch(async(data)=>{
                    res.json({status:"on test",code:400, data:data})
                })
            .catch((err)=>{
                res.json({status:"on test",code:400, data:err})
            })
        }
        else{
            res.json({status:"on test",code:400, data:"level-5"})
        }


        //after getting data

    })
        
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