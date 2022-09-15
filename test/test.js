require("../controllers/verificationValidator");

const {verificationOutput} = require("../model/verification");
const {verification} = require("../controllers/verificationValidator");
const { verificationSuccess, wrongCode } = require("../controllers/messages");

const data = {
    code: 1234,
    email: "asm.tareq.mahmood@g.bracu.ac.bd",
    isVerified: false
};

