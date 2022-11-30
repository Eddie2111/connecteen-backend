const Joi = require('joi');
const verification = Joi.object({
    code: Joi.number()
            .integer()
            .min(1000)
            .max(9000)
            .required(),
    email: Joi.string()
            .email(
                {
                    minDomainSegments: 2,
                    maxDomainSegments: 5,
                    //tlds: { allow: ['com', 'net','ac.bd'] }
                })
            .required(),
            
})
//console.log(verification.validate({email:"tarek.ac.bd.cb@bracu.ac.bd",code:"1243"}));

            
module.exports = {verification};