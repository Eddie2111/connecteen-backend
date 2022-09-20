////////// Login validator //////////
const bcrypt = require('bcrypt');

const validateEmail = (email) => {
    try{
    const testedemail = email.trim().substring(0,35).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    return String(testedemail[0]);
    }
    catch(err){
        return "not a valid email";
    }
    };
const validatePassword = (password) => {
  try{
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);

    return String(hash).substring(0,64);
  }
  catch(err){
    return "not a valid password";
  }
}

function validateLogin(data) {
    const email     = validateEmail(data.email);
    const password  = validatePassword(data.password);
        const validated = {
            email:email,
            password:String(password)
        }
    return validated;
}
            
const Joi = require('joi');

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


//schema.validate({ fullname: 'abc', email: 'tarek42223@gmail.com'});
// -> { value: { username: 'abc', birth_year: 1994 } }

//schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Test validation Schema from here -
const value = schema.validate({ name: 'ontora biswas', email:"tarek42223@gmail.com", password:'AA!@12bbb' });
//console.log(value)

            
module.exports = {validateSignUp, schema};