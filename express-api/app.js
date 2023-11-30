import express from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin.js';
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

app.use('/admin',adminRoutes);
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



// Secret key to sign and verify tokens
const secretKey = 'yourSecretKey'; // Change this to a more secure value

// Mock user data (in place of a database)
const users = [
  {
    id: 1,
    username: 'example_user'
    // Add other user information here
  },
  {
    id: 2,
    username: 'bejan'
    // Add other user information here
  },

];

// Route to generate a token upon successful authentication
app.post('/login', (req, res) => {
  // For demo purposes, let's assume authentication is successful with provided credentials
  // In a real scenario, this would involve user authentication logic (e.g., username/password validation)

  // Assuming the user is authenticated successfully
  const user = users.find(u => u.username === req.body.username); // Fetch user data

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' }); // Sign the token with user's ID
  
  // Return the token to the client
  res.json({ token });
});

// Route to access a protected resource
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Token is valid
    const userId = decodedToken.userId;

    // Access the protected resource or perform actions based on the user ID
    res.json({ message: `Access granted for user ID ${userId}` });
  });
});






app.listen(PORT,() => console.log(`server running on this port: http://localhost:${PORT}`));
