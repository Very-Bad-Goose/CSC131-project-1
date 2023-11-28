// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user:"postgres",
//     host:"localhost",
//     database:"test",
//     password:"moscbecy824",
//     port:5432
// });

// module.exports = pool;

// import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "moscbecy824",
    port: 5432
});

export default pool;