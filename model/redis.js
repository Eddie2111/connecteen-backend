try{
    const Redis = require('ioredis');    
    const redis = new Redis({
        host: "cache",
        port: "6379",
        username: "",
        password: ""
    })
    redis.on('connect', function() {
        console.log('redis:200');
    });
    module.exports = redis;
}
catch (err){
    //console.log(err);
    console.log("redis:500")
    const redis= "dummy";
    module.exports = redis;
}
    /*
        const redis = new Redis({
        host: process.env.redishost,
        port: process.env.redisport,
        username: process.env.redisusername,
        password: process.env.redispassword
    })
    */


/*
redishost = redis-14306.c294.ap-northeast-1-2.ec2.cloud.redislabs.com
redisport = 14306
redispassword = bmwM3GTR.
redisusername = connecteen

redis.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}`);
});
const value = {
  "conrad": "value1",
  "conrad2": "value2",
  "conrad3": "value3",
  "conrad4": "value4",
  "conrad5": "value5",
}
redis.hmset("mykey", value); // Returns a promise which resolves to "OK" when the command succeeds.
//redis.del("mykey")
// ioredis supports the node.js callback style

redis.hgetall("mykey", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Prints "value"
  }
});
*/
/////////////// mem checker ////////////////////

