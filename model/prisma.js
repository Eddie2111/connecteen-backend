const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function ReadAll() {
  // ... you will write your Prisma Client queries here
  try{
    const allUsers = await prisma.Users.findMany();
    console.log(allUsers);
  }
  catch(err){
    console.log(err);
  }
}


async function ReadAllCode() {
    // ... you will write your Prisma Client queries here
    try{
        const allUsers = await prisma.Verification.findMany();
        return allUsers
    }
    catch(err){
        await prisma.$disconnect()
        console.log(err)
        process.exit(1)
    }
}

async function findOne(email) {
    // ... you will write your Prisma Client queries here
    try{
      const allUsers = await prisma.Users.findUnique({
        where: {
          email: email
        },
      });
      return allUsers;
    }
    catch(err){
      return err
    }
  }

async function findAuthOne(data) {
  // will be used for login
  try{
    const allUsers = await prisma.Users.findUnique({
      where: {
        email: data.email,
        password: data.password,
      },
    });
    return allUsers;
  }
  catch(err){
    return err
  }
}
async function findCode(data){
    try{
        const codes = await prisma.Verification.findUnique({
            where:{
                email: data.email,
            },
        });
        return codes;
    }
    catch(err){
        return err;
    }
}

async function createOne(data) {
    // ... creates a user
    try{
        const allUsers = await prisma.Users.create({
        data: {
            username: data.username,
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            location: data.location,
        },
        });
        return allUsers
    }
    catch(err){
        return err
    }
}

async function createCode(data) {
    // ... you will write your Prisma Client queries here
    try{

        const allUsers = await prisma.Verification.create({
        data: {
            email: data.email,
            code:  data.code,
            createdAt: data.createdAt,
            expiredAt: data.expiredAt,
        },
        });
        return allUsers;
    }
    catch(err){
        return err
    }
}


async function updateOne(email,data) {
    // ... you will write your Prisma Client queries here
    try{
        const allUsers = await prisma.Users.update({
        where: {
            email: email,
        },
        data: {
            fullname: data.name,
            email: data.email,
            password: data.password,
            updatedAt: new Date(),
        },
        });
        console.log(allUsers);
    }
    catch(err){
        console.log(err);
    }
}

async function deleteOne(email) {
    // ... deletes user
    try{
        const allUsers = await prisma.Users.delete({
        where: {
            email: email,
        },
        });
        console.log(allUsers);
    }
    catch(err){
        console.log(err);
    }
}
async function deleteCode(email){
    try{
        const codes = await prisma.Verification.delete({
            where:{
                email: email,
            },
        });
        return codes
    }
    catch(err){
        return err
    }
}

const cAt = parseInt(String(new Date().getTime()).slice(0,10))
const eAt = parseInt(String(new Date().getTime()+1200000).slice(0,10))

module.exports = {
    findOne,
    findAuthOne,
    createOne,
    updateOne,
    deleteOne,
    createCode,
    findCode,
    deleteCode,
    ReadAllCode
}



// data show →

//deleteOne('asm.tareq@g.bracu.ac.bd')
//deleteCode('asm.tareq.mahmoodg.bracu.ac.bd')
/*
ReadAll()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  
ReadAllCode()
  .then(async (result) => { 
      await prisma.$disconnect()
  })
  .catch(async (e) => {
      console.error(e)
  })
*/
