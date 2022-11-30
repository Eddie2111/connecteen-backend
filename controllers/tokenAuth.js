const jwt = require('jsonwebtoken');

async function auth(token){
  try{
    const decoded = jwt.verify(token, process.env.secret);
    const result = decoded.email;
    //const user = await userOne.findOne({email:result});
    const user = "dummy";
    //console.log(user.email,result);
    if (result === user.email) {
      //console.log('returned true!')
    return true;
    }
    else{
    return false;
    }
  }
catch(err){
    return false;
  }
}
module.exports = auth;
