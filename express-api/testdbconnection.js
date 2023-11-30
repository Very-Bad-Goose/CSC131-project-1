// 'Tedious' node is required in order to interface with
// the MS Azure Sql Server


import tedious from 'tedious';
const Connection = tedious.Connection;
//const Connection = require('tedious').Connection

const config = {
    server: 'localhost',
    authentication: {
        // default uses multiple Azur authentification methods
        type: 'default',
        options: {
            userName: 'VTSInventory',
            password: 'D0N0tus3'
        },
        options: {
            port: 1433,
            database: 'VTS_AzureSQL'
        }
    }
};

// Turns the Connection object into a connection variable, 
// with the config settings

const connection = new Connection(config);

// Create a connection with the variable, not the object

connection.connect((err) => {
    if (err){
        console.log('Connection Failed ' + err);
        throw err;
    }
    console.log('Connection Successful');
    connection.close();
});