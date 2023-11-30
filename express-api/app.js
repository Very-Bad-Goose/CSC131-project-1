import express from 'express';
import bodyParser from 'body-parser';

import ticketsRoutes from './routes/tickets.js';
import itemsRoutes from './routes/items.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import * as path from 'path';

import jwt from 'jsonwebtoken';

const app = express();
const PORT = 8080;

// Middleware for authentication
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization; // Retrieve token from request header

    if (!token) {
        return res.sendStatus(401); // Unauthorized if no token is present
    }

    jwt.verify(token, 'your_secret_key', (err, user) => { // Verify the token
        if (err) {
        return res.sendStatus(403); // Forbidden if token is invalid
        }
        req.user = user; // Attach the user data to the request object for further use
        next(); // Continue to the next middleware or route handler
    });
};

// Example login route that generates and sends a token
app.post('/adminLogin', (req, res) => {
    // Authenticate user, retrieve user information, and generate a token
    const passwordParam = req.body.password;
    if(passwordParam == 'test'){
        const user = { id: 1, username: 'example' };
        const accessToken = jwt.sign(user, 'your_secret_key');
        res.json({ accessToken }); // Send the token to the client
    }
  });
  
  // Protected route that requires authentication
  app.get('/protected', authenticateToken, (req, res) => {
    res.json({ data: 'Protected data' }); // Respond with protected data
  });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
// app.use(express.static('public'));
// Set 'public' directory to serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

const cssFilePath = '/css/';
const assetFilePath = '/assets/';
const scriptFilePath = '/scripts/';
app.use((req, res, next) => {
    res.locals.cssPath = cssFilePath;
    res.locals.assetPath = assetFilePath;
    res.locals.scriptPath = scriptFilePath;
    next();
});


app.use('/tickets',ticketsRoutes);
app.use('/items',itemsRoutes);

app.get('/', (req,res)=>{
    // console.log('running...');

    // res.send('hello');
    // res.sendFile('vtsLanding.html', { root: __dirname });
    res.status(200).render('../views/categorySelect');
});
app.get('/admin', (req,res)=>{
    res.status(200).render('../views/adminLogin');
});

app.listen(PORT,() => console.log(`server running on this port: http://localhost:${PORT}`));
