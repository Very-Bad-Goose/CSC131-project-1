// Initialize the Express app

const express = require ('express');
const app = express();
const port = 3000;

// Define the API route

app.get('/', (req, res) => {
        res.send();
    });

// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});