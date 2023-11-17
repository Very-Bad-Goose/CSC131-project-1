// test connection to the database
// check the "sql server info.txt" 
// file for valid login data

const mysql = require('mysql2');

// defines the target connection
// should keep host: localhost
// and port: 3306 until further change
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'ValleyTechSystems2007',
    database: 'items'
});

connection.connect(function(error){
    if (error)
        return console.error('error: ' + error.message);
    console.log('Connected');
});

