const username = ()=>{
    let r = (Math.random() + 5).toString(36).substring(2);
    var now = Date.now().toString()
    var username = r+now;
    return username;
}
module.exports = username;
            