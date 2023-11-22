import express from 'express';
import bodyParser from 'body-parser';

import ticketsRoutes from './routes/tickets.js';
import itemsRoutes from './routes/items.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/tickets',ticketsRoutes);
app.use('/items',itemsRoutes);

app.get('/', (req,res)=>{
    console.log('running...');

    // res.send('hello');
    res.sendFile('vtsFormPage02.html', { root: __dirname });
});

app.listen(PORT,() => console.log(`server running on this port: http://localhost:${PORT}`));
