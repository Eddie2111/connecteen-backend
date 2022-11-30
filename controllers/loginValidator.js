////////// login validator //////////
const bcrypt = require('bcrypt');
const Joi = require('joi');

const validateEmail = (email) => {
    try{
    const testedemail = email.trim().substring(0,35).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    return String(testedemail[0]);
    }
    catch(err){
        return false;
    }
  };

const validatePassword =  (password) => {

    return String(password).substring(0,64);
}

function validateLogin(data) {
    const email     = validateEmail(data.email);
    const password  = validatePassword(data.password);
        const validated = {
            email:email,
            password:String(password),
        }
    return validated;
}
            
const schema = Joi.object({

    password: Joi.string()
        .pattern(new RegExp('^.{0,65}$')),
        //'^[a-z A-Z0-9]{3,30}$'
    repeat_password: Joi.ref('password'),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    birth_year: Joi.number()
                    .integer()
                    .min(1900)
                    .max(2013),

    email: Joi.string()
        .email(
            { 
                minDomainSegments: 2, 
                maxDomainSegments: 5,
                //tlds: { allow: ['com', 'net','ac.bd'] } 
            }
        ),
                
})


module.exports = {validateLogin, schema};