const redis = require('../model/redis');


function sessionRemover(){
    redis.keys("*",(err,res)=>{
        if(res){
            res.forEach((key)=>{
                //redis.del(key);
                redis.hgetall(key,(err,data)=>{
                    if(data){
                        const {exp} = data;
                        if(exp < Date.now()){
                            redis.del(key);
                        }
                    }
                });
            });
        }
    });
}
setInterval(sessionRemover, 1000000);

/////// redis mem checker //////
/*
redis.keys("*", (err, data) => {
    console.log(data);
});
*/
module.exports = sessionRemover;    