const mongoose = require('mongoose');

const verificationIn = new mongoose.Schema({
    username: String,  // not user defined, backend defined for better indexing
    code: {
        type:      String,
        required:  true,
        length:    [4, 4],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[0-9]{4}$/.test(v);
            }
        }
  },
  email: {                         // user defined
    type:      String,
    required:  true,
    lowercase: true,
    length:    [8, 35],
    unique:    true,
    trim:      true,
    validate: {
        validator: function(v) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);}
    }
},
  },
   { collection: 'verificationDB' }
);

const verificationOut = new mongoose.Schema({            //look up schema, will be used for logging in
    code: {
        type:      String,
    },
    email: {
        type:      String
    },
    isConfirmed: {
        type:      Boolean,
        default:   true
    }
  },
   { collection: 'verificationDB' }
);

const verificationInput = mongoose.model('verificationIn', verificationIn);
const verificationOutput = mongoose.model('verificationOut', verificationOut);
module.exports = {verificationInput,verificationOutput};

/////////////////
/** for password validation
validate: {
    validator: function(v) {
        return /^[a-zA-Z0-9]+$/.test(v);
    }
}
 */