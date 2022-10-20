const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
try{
client.connect().then(()=>{console.log("SQL DB:200")}).catch((err)=>{console.log(err)});
}
catch(err){
  console.log(err,"SQL DB:500");
}
/*
//client.query('CREATE TABLE users ( username VARCHAR(129) PRIMARY KEY , email VARCHAR ( 35 ) UNIQUE NOT NULL , password VARCHAR(65) NOT NULL );', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/
module.exports = client;