////////// sign up validator //////////
const bcrypt = require('bcrypt');

const validateName = (name) => {
    if(name.length < 3){
        return false;
    }
    return name;
}

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
  try{
    if (password.length > 5) {
        const saltRounds = 10;
        const salt =  bcrypt.genSaltSync(saltRounds);
        const hash =  bcrypt.hashSync(password, salt);
    return String(hash).substring(0,64);
    }
    else{
        return false;
    }
  }
  catch(err){
    return false;
  }
}

function validateSignUp(data) {
    const email     = validateEmail(data.email);
    const password  = validatePassword(data.password);
    const name      = validateName(data.name);
        const validated = {
            email:email,
            password:String(password),
            name:name
        }
    return validated;
}
            
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
            .min(3)
            .max(30)
            .pattern(new RegExp('^[a-z A-Z]{0,30}$')),

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
//const value = schema.validate({ name: 'ontora biswas', email:"tarek42223@g.bracu.ac.bd", password:'AA!@12bbb' });
//console.log(value)

            
module.exports = {validateSignUp, schema};