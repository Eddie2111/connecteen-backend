const Joi = require('joi');
const verification = Joi.object({
    code: Joi.string()
            .pattern(new RegExp('^[0-9]{6}$'))
})
console.log(verification.validate({code:"124356"}));

            
module.exports = {verification};