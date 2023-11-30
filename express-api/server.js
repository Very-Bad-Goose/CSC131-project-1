// Initialize the Express app

import express from 'express';
const app = express();
const port = 8080;

// Define the API route

app.get('/', (req, res) => {
        res.send();
    });

// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});