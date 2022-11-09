/* DEPRECATED */
var nodemailer = require('nodemailer');
var nodeoutlook = require('nodejs-nodemailer-outlook')


function mailerAlpha(code,email){
    try{
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.EventMail,
            pass: process.env.EventMailPass
        },
        from: process.env.EventMail,
        to: email,
        subject: 'Connecteen OTP verification',
        html:`
        <p> Hello </p>
        <br/>
                <p>Your OTP <h1>`+code+`</h1>.You have only 5 minutes left. After 5 minutes, your token will be expired and you will have to login again.</p>
        <br/>
                <p> If you think this is a mistake or you have not signed up for Connecteen, please ignore this email or visit us at <a href="connecteen.tech">Connecteen</a>. You can also complain if you recieve execessive mails. </p>
        <p>Thank you</p>
        `,
        text: 'This is the OTP code for Connecteen Signup.' + code, //not this
        replyTo: email,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    }
    
    );
}
    catch(e){
        console.log(e);
    }


}

function mailerOmega(token,mail){
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EventMail,
        pass: process.env.EventMailPass
        }
    });
    try{
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
        catch(e){
            console.log(e);
        }
}
 

module.exports = {mailerAlpha,mailerOmega};