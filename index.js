require('dotenv').config();

// express
const express       = require('express');
const app           = express();
const session       = require("express-session");

// databases
const postgres      = require('./model/postgres');
const atlas         = require('./model/atlas');
const redis         = require('./model/redis');
const prismadb      = require('./model/prisma');

// middlewares
const codeClearer   = require('./middleware/codeClearer');
const sessionRemover= require('./middleware/sessionRemover');
const cookieparser  = require("cookie-parser");
const cors          = require('cors');


require('./test/test');


// environment setups
const port = process.env.PORT;
const {corsOptions, sessionSettings} = require('./data/config');
app.use(session(sessionSettings));
app.use(cors(corsOptions));
app.use(cookieparser());
app.use(express.json())
app.use(express.urlencoded({extended: true}));


// routes 
app.use('/',require('./route/index'));
app.use('/signup',require('./route/signup'));
app.use('/login',require('./route/login'));
app.use('/verify',require('./route/verify'));
app.use('/course',require('./route/course'));
app.use('/dashboard',require('./route/dashboard'));
app.use('/forms',require('./route/forms'));
app.use('/logout',require('./route/logout'));
app.use('/image',require('./route/image'));
app.use('/auth',require('./route/auth'));
app.use('/test',require('./route/test'));
app.use("/resendCode",require("./route/resendCode"));
app.use('/welcomeForm',require('./route/welcomeForm'));

//test route

// ip tracing
app.get('/trace',function(req, res) {
    const ipAddress = req.socket.remoteAddress;
    var geoip = require('geoip-lite');
    //var ip = "207.97.227.239";
    var geo = geoip.lookup(ipAddress);
    res.send(geo);
});


// error handling

const {errorRoute} = require ("./controllers/messages");
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(errorRoute);
});


app.listen(port,()=>{
    console.log('listening on port',port);
})