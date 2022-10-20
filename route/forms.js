const express = require('express');
const router = express.Router();

const data = {
    title: "welcome",
    message: "data came from node backend",
    version: "10.10.10"
};
router
    .route('/welcomeForm')
    .get((req,res)=>{
        res.send('/connecteen');
    })
    .post((req,res)=>{
      const data = req.body;
      const formData = {
        username: data.username,
        firsname:data.firstname,
        lastname:data.lastname,
        phone:data.phone,
        birthdate:data.birthdate,
        address:data.address,
        schoolName:data.schoolName,
        collegeName:data.collegeName,
        universityName:data.universityName,
        companyName:data.companyName,
        jobTitle:data.jobTitle,
        others:data.others
      }
        res.json(
            {...formData,reponse: "ok!"}
        );
    });
        
module.exports = router;


/*
const formData = {
    firsname:data.firstname,
    lastname:data.lastname,
    email:data.email,
    phone:data.phone,
    birthdate:data.birthdate,
    address:data.address,
    schoolName:data.schoolName,
    collegeName:data.collegeName,
    universityName:data.universityName,
    companyName:data.companyName,
    jobTitle:data.jobTitle,
    others:data.others
  }
  */