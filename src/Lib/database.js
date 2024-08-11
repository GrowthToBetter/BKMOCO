import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

const db = await mysql.createConnection({
  host: 'localhost',
  user:'root',
  database:'bkmoklet'
});

export default db;



