const mysql = require('mysql2');
const express = require('express');
app = express();

// Basic function to connect to the database
// Must be run before attempting any queries
// username = string, pass = string

void function connectDB(username, pass){
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: username,
        password: pass,
        database: 'items'
    });
    
    connection.connect((err) => {
        if (err){
            return console.err('Error connecting to the database' + err.stack);
        }
        console.log('Connected to the database as ID ' + connection.threadId);
    });
};

// Function used to get all items from the Items table

void function getItems(){
    app.get('/', (req, res) => {
        connection.query(
            'SELECT * FROM `items.items`', (err, results) => {
                if (err) {
                    console.error('Error fetching items from the database' + err.stack);
                    return res.status(500).json({err: 'Failed to fetch items'});
                }
            res.json(results)
            }
        );
    })
};

// Function used to get a specific item from the Items table
// id = int

void function getItem(id){
    app.get('/', (req, res) => {
        connection.execute(
            'SELECT * FROM `items.items` WHERE `id` = ?',
            [id], (err, results) => {
                if (err) {
                    console.error('Error fetching ids from the database ' + err.stack);
                    return res.status(500).json({err: 'Failed to fetch ids'});
                }
            res.json(results);
            }
        );
    })
};

// Function used to get a list of distinct entries within a select field
// field = string

void function getField(field){
    app.get('/', (req, res) => {
        connection.execute(
            'SELECT DISTINCT ? FROM `items.items`',
            [field], (err, results) => {
                if (err){
                    console.error('Error fetching fields from the database ' + err.stack);
                    return res.status(500).json({err: 'Failed to fetch fields'});
                }
            res.json(results);
            }
        );
    })
};

// Function used to add an item to the Items table
// id = int, archetype = string, category = string, manufacturer = string, name = string, imagePath = string

void function addItem(id, archetype, category, manufacturer, name, imagePath){
    app.use(express.json());

    app.post('/', (req, res) => {
        id = req.body;

        if (!id){
            return res.status(400).json({err: 'id is required '});
        }
        connection.query(
            'INSERT INTO `items.items` (`id`, `archetype`, `category`, `manufacturer`, `name`, `imagePath`) VALUES (?, ?, ?, ?, ?, ?)',
            [id, archetype, category, manufacturer, name, imagePath], (req, res) => {
                if (err){
                    console.err('Error inserting item into the database: ' + err.stack);
                    return res.status(500).json({err: 'Failed to insert item'})
                }
            res.json({message: 'Item inserted successfuly'});
            }
        );
    })
};

// Function used to delete an item from the Items table
// id = int

void function deleteItem(id){
    app.delete('/', (req, res) => {
        const userId = req.params.id;

        connection.query(
            'DELETE FROM `items.items` WHERE `id` = ?',
            [id], (req, res) => {
                if (err){
                    console.err('Error deleting item from the database: ' + err.stack);
                    return res.status(500).json({err: 'Failed to delete item'})
                }
                if (results.affectedRows === 0){
                    
                }
            res.json({})
        }
    );
};

// Function used to update an item in the Items table
// id = int, archetype = string, category = string, manufacturer = string, name = string, imagePath = string

void function updateItem(id, archetype, category, manufacturer, name, imagePath){
    connection.query(
        'UPDATE `items.items` SET `archetype` = ?, `category` = ?, `manufacturer` = ?, `name` = ?, `imagePath` = ? WHERE `id` = ?',
        [archetype, category, manufacturer, name, imagePath, id],
        function(err){

        }
    );
};

// Function used to create a log in the Logs table
// id = int, sender = string, reciever = string, contents = string, notes = string, timeStamp = int, status = bool

void function writeLog(id, sender, reciever, contents, notes, timeStamp, status){
    connection.query(
        'INSERT INTO `items.logs` (`id`, `sender`, `reciever`, `contents`, `notes`, `timeStamp`, `status`) VALUES(?, ?, ?, ?, ?, ?, ?)',
        [id, sender, reciever, contents, notes, timeStamp, status],
        function(err){

        }
    );
};

// Function to update a log's status in the Log table
// id = int, status = bool

void function updateLogStatus(id, status){
    connection.query(
        'UPDATE `items.logs` SET `status` = ? WHERE `id` = ?',
        [status, id],
        function(err){

        }
    );
};