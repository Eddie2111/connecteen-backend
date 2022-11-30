//const jwt = require('jsonwebtoken');
//const redis = require('../model/redis');
const value = {
    "token": "34ht8ig43h9",
    "iat": Date.now(),
    "exp": Date.now() + 1000*60*60*24*3,
}

//const gtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5Lk5XTm5iV3BsWW01dmR6RTJOamczTmpneE56Y3lNek0uQ3Fsc2FqdV9PS0lZblZ4dDF1aWM2WXljeUxlVm82VUNvSF9JMmkyVEx6VSIsImlhdCI6MTY2OTgwMDQ4NDgxMCwiZXhwIjoxNjcwMDU5Njg0ODEwfQ.mW2acBF7S0GD4WnviZHcvSAyCca5EnsvmCZ2aKdkikQ"
//const token = jwt.sign( value, process.env.SECRET);
//const decoded = jwt.verify(gtoken, process.env.SECRET);
//const searchInt = jwt.verify(decoded.token,process.env.SECRET);
//console.log(token);
//console.log(searchInt);
/*
redis.keys("*", (err, data) => {
    console.log(data);
    //console.log(err);
});
*/
