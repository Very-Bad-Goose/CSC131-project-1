// 'Tedious' node is required in order to interface with
// the MS Azure Sql Server

const Connection = require('tedious').Connection

const config = {
    server: 'localhost',
    authentication: {
        // default uses multiple Azur authentification methods
        type: 'default',
        options: {
            // temp names, will need to be filled later
            userName: 'test',
            password: 'test'
        }
    },
};

// Turns the Connection object into a connection variable, 
// with the config settings

const connection = new Connection(congif);

// Create a connection with the variable, not the object

connection.connect((err) => {
    if (err){
        console.log('Connection Failed' + err);
        throw err;
    }
    console.log('Connection Successful');
});