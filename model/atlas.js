const mongoose = require('mongoose');
const url = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@${process.env.DBCLUSTER}`;

const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB:200'))
    .catch(err => console.error('DB:404', err));

// const connection = "dummy"; // only use it when server under development

module.exports = connection;












/*
    // Find only one document matching
    // the condition(age >= 5)
    /*
    userOne.findOne({"email": "dsdsa@dasd.co" }, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Result : ", docs);
        }
    });
    
const connection = "dummy";
*/