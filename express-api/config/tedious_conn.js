// 'Tedious' node is required in order to interface with
// the MS Azure Sql Server


import tedious from 'tedious';
const Connection = tedious.Connection;
const Request = tedious.Request;
//const Connection = require('tedious').Connection

const config = {
    server: 'localhost',
    authentication: {
        // default uses multiple Azur authentification methods
        type: 'default',
        options: {
            userName: 'VTSInventory',
            password: 'D0N0tus3'
        }
    },
};

// Turns the Connection object into a connection variable, 
// with the config settings


const connection = new Connection(config);

connection.connect((err) => {
    if (err){
        console.log('Connection failed');
        throw err;
    }
});

export default connection;