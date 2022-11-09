const sendingCookie = {
    httpOnly:true,
    secure:true,
    sameSite:'none',
    maxAge:60*60*24*30,
    path:'/'
}

const corsConfig = {
    origin: true,
    methods: 'GET,POST', //GET,HEAD,PUT,PATCH,POST,DELETE
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 60000,
    preflightContinue: false,
    credentials: true
}
const corsOptions = {
    origin:true,
    credentials: true,
    optionsSuccessStatus: 200, 
    preflightContinue: true,
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type','Authorization'],
    exposedHeaders: ['Content-Type','Authorization'],
    maxAge: 3600,
    accessControlAllowOrigin: true,
    accessControlAllowCredentials: true,
    accessControlAllowMethods: 'GET,POST',
    accessControlAllowHeaders: 'Content-Type,Authorization',
    accessControlExposeHeaders: 'Content-Type,Authorization',

}

const sessionSettings = {
    secret: process.env.SECRET,
    saveUninitialized:true,
    resave: false, 
    cookie: { 
          sendingCookie
      },
  }


module.exports = {sendingCookie,corsConfig, sessionSettings, corsOptions};