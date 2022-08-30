
var nodemailer = require('nodemailer');
var nodeoutlook = require('nodejs-nodemailer-outlook')


function mailerAlpha(code,email){
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.EventMail,
            pass: process.env.EventMailPass
        },
        from: process.env.EventMail,
        to: email,
        subject: 'Test mail',
        html: '<b>This is bold text '+code+' </b>', //this is sent
        text: 'This is text version ' + code, //not this
        replyTo: 'receiverXXX@gmail.com',
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    }
    
    );



}

function mailerOmega(token,mail){
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EventMail,
        pass: process.env.EventMailPass
        }
    });
    var mailOptions = {
    from: process.env.EventMail,
    to: `${mail}`,
    subject: 'Connecteen OTP verification',
    html:"<p>Your OTP <h1>"+token+"</h1>.You have only 5 minutes left. After 5 minutes, your token will be expired and you will have to login again.</p>"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } 
        else {
            console.log('Email sent: ' + info.response);
        }
    });
}
 

module.exports = {mailerAlpha,mailerOmega};