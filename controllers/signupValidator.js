////////// sign up validator //////////

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
                return String(password).substring(0,18);;
                
            }
            
            function validateSignUp(data) {
                const email     = validateEmail(data.email);
                const password  = validatePassword(data.password);
                const name      = String(data.name).match(/^[a-z A-Z]+$/);
                    const validated = {
                        email:email,
                        password:String(password),
                        name:String(name)
                    }
                return validated;
            }
            
const Joi = require('joi');

const schema = Joi.object({
name: Joi.string()
        .min(3)
        .max(30)
        .pattern(new RegExp('^[a-z A-Z]{3,18}$')),

password: Joi.string()
                .pattern(new RegExp('^.{4,30}$')),
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
            minDomainSegments: 4, 
            //tlds: { allow: ['com', 'net','ac.bd'] } 
        }
    ),
                
})


//schema.validate({ fullname: 'abc', email: 'tarek42223@gmail.com'});
// -> { value: { username: 'abc', birth_year: 1994 } }

//schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -
const value = schema.validate({ name: 'ontora biswas', birth_year: 1994, password:'AA!@12bbb' });
//console.log(value)

            
            module.exports = {validateSignUp, schema};