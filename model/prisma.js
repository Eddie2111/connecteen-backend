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
ReadAll()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

async function ReadAllCode() {
    // ... you will write your Prisma Client queries here
    try{
        const allUsers = await prisma.Verification.findMany();
        console.log(allUsers);
    }
    catch(err){
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}
ReadAllCode()
    .then(async () => { 
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
    })

async function findOne(email,password) {
  // ... you will write your Prisma Client queries here
  try{
    const allUsers = await prisma.Users.findUnique({
      where: {
        email: email,
        password: password,
      },
    });
    console.log(allUsers);
  }
  catch(err){
    console.log(err);
  }
}
async function findCode(email,code){
    try{
        const codes = await prisma.Verification.findUnique({
            where:{
                email: email,
                code: code,
            },
        });
        console.log(codes);
    }
    catch(err){
        console.log(err);
    }
}

async function createOne(data) {
    // ... you will write your Prisma Client queries here
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
    // ... you will write your Prisma Client queries here
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
        console.log(codes);
    }
    catch(err){
        console.log(err);
    }
}

const cAt = parseInt(String(new Date().getTime()).slice(0,10))
const eAt = parseInt(String(new Date().getTime()+1200000).slice(0,10))




module.exports = {
    findOne,
    createOne,
    updateOne,
    deleteOne,
    createCode,
    findCode,
    deleteCode,
}

//

