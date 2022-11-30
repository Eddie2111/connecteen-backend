
const { Client } = require('pg');
/*
// for online database on heroku [most probably expired by now]
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
*/

// just to test that the postgres in online
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'mysecretpassword',
    port: 5432,
});
try{
    client.connect()
        .then( ()=>{
            console.log("SQL DB:200")   
            }
        )
        .catch((err)=>{
            console.log(err)
            }
        );
    }
catch(err){
  console.log(err,"SQL DB:500");
}
/*
client.query('CREATE TABLE users ( username VARCHAR(129) PRIMARY KEY ,fullname VARCHAR ( 35 ) UNIQUE NOT NULL , email VARCHAR ( 35 ) UNIQUE NOT NULL , password VARCHAR(65) NOT NULL );', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

*/
/*
client.query('SELECT * FROM users;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
*/
/*
module.exports = client;
*/
