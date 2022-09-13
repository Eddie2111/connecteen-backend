require('dotenv').config();

const express       = require('express');
const app           = express();
const session       = require("express-session");
const atlas         = require('./model/atlas');
const cookieparser  = require("cookie-parser");
const bodyParser    = require('body-parser');
const cors          = require('cors');


// backloggers
const morgan     = require('morgan');
const fs         = require('fs');
const path       = require('path')

require('./test/test');


// environment setups
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))

const corsConfig = {
    origin: '*',
    methods: 'GET,POST', //GET,HEAD,PUT,PATCH,POST,DELETE
    preflightContinue: false,
    optionsSuccessStatus: 204
}
app.use(cors(corsConfig));

const port = process.env.PORT;


app.use(session({ 
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(cookieparser());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())


// route imports
const welcome = require('./route/index');
const signup = require('./route/signup');
const verify = require('./route/verify');
const course = require('./route/course');
const test = require('./route/test');

// routes 
app.use('/',welcome);
app.use('/signup',signup);
app.use('/verify',verify);
app.use('/course',course);
app.use('/test',test);

// error handling
const {errorRoute} = require ("./controllers/messages");
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(errorRoute);
});



app.listen(port,()=>{
    console.log('listening on port',port);
})