const {ReadAllCode, deleteCode} = require('../model/prisma');


function clear(){
    ReadAllCode()
        .then((result)=>{
            for (let i = 0; i < result.length; i++) {
                if(result[i].expiredAt<parseInt(String(new Date().getTime()).slice(0,10))){
                    deleteCode(result[i].email)
                }
            }
        })
        .catch((err)=>{
            return err
        })
}

setInterval(clear, 600000);