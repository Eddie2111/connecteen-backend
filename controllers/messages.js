const success = {
    status: 200,
    message: "success"
}
const fail = {
    status: 404,
    message: "not found"
}
const wrongPassword = {
    status: 400,
    message: "wrong password"
}
const noUser = {
    status: 400,
    message: "no user found"
}
const noEmail = {
    status: 400,
    message: "no email found"
}
const improperInput = {
    status: 400,
    message:"improper email or password",
    route: "/signin"
}
const passwordMatch = {
    status: 200,
    message: "password match"
}
const mailExists = {
    status: 400,
    message: "That Email is already in use",
    route: "/signup"
}
const signupSuccess= {
    status:200,
    message: "signup ok!",
    route: "/login"
}
const signupFail = {
    status: 404,
    message: "sign up failed",
}
const netError = {
    status: 500,
    message: "network error",
}
const loginwrongPassword =
{
    status: 400,
    message: "wrong password",
    route: "/login"
}
const loginpasswordMatch ={
    status: 200,
    message: "password match",
    route: "/success"
}
const loginnoUser={
    status: 400,
    message: "no user found",
    route: "/login"
}
const noinput = {
    status: 400,
    message: "No email or Password",
    route: "/login"
}
const errorRoute = {
    status:404,
    message: "route exists but will not operate. Are you authorized?",
    route: "/error"
}
const loggedin= {
    status: 200,
    message: "logged in",
    route: "/success"
}
const wrongCode = {
    status: 400,
    message: "wrong code",
    route: "/verify"
}
const verificationSuccess = {
    status: 200,
    message: "verification success",
    route: "/success"
}
const verificationFail = {
    status: 404,
    message: "verification failed",
    route: "/signup"
}
module.exports = {
        success, fail, wrongPassword, noinput, errorRoute, 
        noUser, noEmail, passwordMatch, improperInput,
        mailExists, signupSuccess, signupFail, loggedin,
        netError, loginwrongPassword, loginpasswordMatch, 
        loginnoUser, wrongCode, verificationSuccess, verificationFail
    };
