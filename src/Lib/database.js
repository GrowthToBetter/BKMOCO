import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

const db = await mysql.createConnection({
  host: 'localhost',
  user:'root',
  database:'bkmoklet'
});

export default db;



// const {createPool}=require('mysql2');
// const pool=createPool({
//   host:'localhost',
//   user:'root',
//   password:'341240BARA',
//   port:3306,
//   database:'data_siswa'
// })

// pool.getConnection((err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log('succes')
// })

// export default pool

