const mysql = require('mysql2');

// Basic function to connect to the database
// Must be run before attempting any queries
// hostName = string, destinationPort = int, username = string, pass = string

void function connectDB(hostName, destinationPort, username, pass){
    const connection = mysql.createConnection({
        host: hostName,
        port: destinationPort,
        user: username,
        password: pass
    });
    
    connection.connect(function(error){
        if (error)
            return console.error('error: ' + error.message);
        console.log('Connected');
    });
};

// Function used to get all items from the Items table

void function getItems(){
    connection.query(
        'SELECT * FROM `Items`',
        function (err, results, fields){
            console.log(results);
            console.log(fields);
        }
    );
};

// Function used to get a specific item from the Items table
// id = int

void function getItem(id){
    connection.execute(
        'SELECT * FROM `Items` WHERE `id` = ?',
        [id],
        function (err, results){
            console.log(results);
        }
    );
};

// Function used to get a list of distinct entries within a select field
// field = string

void function getField(field){
    connection.execute(
        'SELECT DISTINCT ? FROM `Items`',
        [field],
        function (err, results){
            console.log(results)
        }
    );
};

// Function used to add an item to the Items table
// id = int, archetype = string, category = string, manufacturer = string, name = string, imagePath = string

void function addItem(id, archetype, category, manufacturer, name, imagePath){
    connection.query(
        'INSERT INTO `Items` (`id`, `archetype`, `category`, `manufacturer`, `name`, `imagePath`) VALUES (?, ?, ?, ?, ?, ?)',
        [id, archetype, category, manufacturer, name, imagePath],
        function (err){

        }
    );
};

// Function used to delete an item from the Items table
// id = int

void function deleteItem(id){
    connection.query(
        'DELETE FROM `Items` WHERE `id` = ?',
        [id],
        function (err){

        }
    );
};

// Function used to update an item in the Items table
// id = int, archetype = string, category = string, manufacturer = string, name = string, imagePath = string

void function updateItem(id, archetype, category, manufacturer, name, imagePath){
    connection.query(
        'UPDATE `Items` SET `archetype` = ?, `category` = ?, `manufacturer` = ?, `name` = ?, `imagePath` = ? WHERE `id` = ?',
        [archetype, category, manufacturer, name, imagePath, id],
        function(err){

        }
    );
};

// Function used to create a log in the Logs table
// id = int, sender = string, reciever = string, contents = string, notes = string, timeStamp = int, status = bool

void function writeLog(id, sender, reciever, contents, notes, timeStamp, status){
    connection.query(
        'INSERT INTO `Logs` (`id`, `sender`, `reciever`, `contents`, `notes`, `timeStamp`, `status`) VALUES(?, ?, ?, ?, ?, ?, ?)',
        [id, sender, reciever, contents, notes, timeStamp, status],
        function(err){

        }
    );
};

// Function to update a log's status in the Log table
// id = int, status = bool

void function updateLogStatus(id, status){
    connection.query(
        'UPDATE `Logs` SET `status` = ? WHERE `id` = ?',
        [status, id],
        function(err){

        }
    );
};