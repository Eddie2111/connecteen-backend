const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,             // not user defined, backend defined for better indexing
    name: {
        type:      String,
        required:  true,
        lowercase: true,
        length:    [3, 20],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z]+$/.test(v);
            }
        }
    },
    email: {
        type:      String,
        required:  true,
        lowercase: true,
        length:    [3, 35],
        unique:    true,
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
            }
        }
    },
    password: {
        type:      String,
        required:  true,
        length:    [3, 150],
        trim:      true,
    },
    isConfirmed: {
        type:      Boolean,
        default:   false
    }
  },
   { collection: 'user' }
);

const Userone = new mongoose.Schema({            //look up schema, will be used for logging in
    name: {
        type:      String,
    },
    email: {
        type:      String
    },
    password: {
        type:      String,
    },
    isConfirmed: {
        type:      Boolean,
        default:   false
    }
  },
   { collection: 'user' }
);
const userOne = mongoose.model('Userone', Userone);
const User    = mongoose.model('User', userSchema);
module.exports = {User,userOne};

/////////////////
/** for password validation
validate: {
    validator: function(v) {
        return /^[a-zA-Z0-9]+$/.test(v);
    }
}
 */