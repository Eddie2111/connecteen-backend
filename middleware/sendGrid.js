const sgMail = require('@sendgrid/mail')

function sendGridMailer(token,mail){
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: mail, // < mail >
    from: 'spamzfortarek@gmail.com', // Change to your verified sender
    subject: 'Connecteen email verification code',
    text: 'and easy to do anywhere, even with Node.js '+token+'', // does not work.
    html: `
    
    <p> Hello </p>
        <p> Your OTP <h1>`+token+`</h1>.You have only 5 minutes left. After 5 minutes, your token will be expired and you will have to login again.</p>
    <br/>
        <p> If you think this is a mistake or you have not signed up for Connecteen, please ignore this email or visit us at <a href="connecteen.tech">Connecteen</a>. You can also complain if you recieve execessive mails. </p>
    <p>Thank you</p>

    `, //works perfectly!
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
module.exports = sendGridMailer;