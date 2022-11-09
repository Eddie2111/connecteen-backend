const express = require('express');
const router = express.Router();

const data = {
    title: "welcome",
    message: "data came from node backend",
    version: "10.10.10"
};
const archivedGet = {...data,test:true,Status:"GET"};
const archivedPost = {...data,test:true,Status:"Post"};
const multer = require('multer');
var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
            //req.body is empty...
            //How could I get the new_file_name property sent from client here?
            cb( null, Date.now()+".jpg");
        }
    }
);
var upload = multer( { storage: storage } );
//var upload = multer({ dest: 'uploads/' })
router
    .route('/')
    .get((req,res)=>{
        res.json({...archivedGet,get:req.body});
    })
    .post(
        
        upload.array('file', 12), (req, res, next)=> {
        console.log(req.files);
        console.log(req.body);
        res.send("done");
    });
        
module.exports = router;