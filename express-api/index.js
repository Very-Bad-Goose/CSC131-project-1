import express from 'express';
import bodyParser from 'body-parser';

import ticketsRoutes from './routes/tickets.js';
import itemsRoutes from './routes/items.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import * as path from 'path';

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
app.use((req, res, next) => {
    res.locals.cssPath = cssFilePath;
    next();
});


app.use('/tickets',ticketsRoutes);
app.use('/items',itemsRoutes);

app.get('/', (req,res)=>{
    console.log('running...');

    // res.send('hello');
    res.sendFile('vtsFormPage02.html', { root: __dirname });
});

app.listen(PORT,() => console.log(`server running on this port: http://localhost:${PORT}`));
