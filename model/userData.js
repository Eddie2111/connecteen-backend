const mongoose = require('mongoose');

const userData = new mongoose.Schema({
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
    },
    firstname: {
        type:      String,
        length:    [3, 20],
        required:  true,
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z]+$/.test(v);
            }
        }
    },
    lastname: {
        type:      String,
        length:    [3, 20],
        required:  true,
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z]+$/.test(v);
            }
        },
    },
    phone: {
        type:      String,
        length:    [3, 20],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[0-9]+$/.test(v);
            }
        }
    },
    birthdate: {
        type:      String,
        length:    [3, 20],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[0-9]+$/.test(v);
            }
        }
    },
    address: {
        type:      String,
        length:    [3, 20],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z 0-9]+$/.test(v);
            }
        }
    },
    schoolName: {
        type:      String,
        required:  true,
        length:    [3, 35],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z 0-9]+$/.test(v);
            }
        }
    },
    collegeName: {
        type:      String,

        length:    [3, 35],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z 0-9]+$/.test(v);
            }
        }
    },
    universityName: {
        type:      String,
        length:    [3, 35],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z 0-9]+$/.test(v);
            }
        }
    },
    companyName: {
        type:      String,
        length:    [3, 35],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z 0-9]+$/.test(v);
            }
        }
    },
    jobTitle: {
        type:      String,
        length:    [3, 20],
        trim:      true,
        validate: {
            validator: function(v) {
                return /^[a-z A-Z]+$/.test(v);
            }
        }
    },
    jobDescription: {
        type:      String,
        length:    [3, 120],
        trim:      true,
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

const User    = mongoose.model('User', userSchema);
module.exports = {User,userOne};