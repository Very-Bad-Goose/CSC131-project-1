// const pool = require('../config/postgres_conn.js');
// const queries = require("../models/queries");
import pool from '../config/postgres_conn.js';
import queries from '../models/item_queries.js';

// export const getItems = (req,res)=>{
//     console.log('getting all items');
//     res.send(items);
// }

export const getItems = (req,res)=>{
    pool.query(queries.getItems,(error, results)=>{
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.status(200).render('../views/vtsItemPage01', { data: results.rows });
    })
    
};

export const newItem = (req,res)=>{
    res.status(200).render('../views/vtsAddItem');
};


// export const addItem = (req,res)=>{
//     const {id, archetype, category, manufacturer, item_name, imagepath, price} = req.body;
//     pool.query(queries.checkIDExists,[id],(error, results)=>{
//         if (results.rows.length){
//             res.send("item already exists");
//         }else{
//             pool.query(queries.addItem,[archetype, category, manufacturer, item_name, imagepath, price],(error, results)=>{
//                 if (error) throw error;
//                 res.status(201).send("item created successfully");
//                 console.log("item created");
//             })
//         }
//     });
// };
export const addItem = (req,res)=>{
    const {archetype, category, manufacturer, item_name, imagepath, price} = req.body;
    pool.query(queries.addItem,[archetype, category, manufacturer, item_name, imagepath, price],(error, results)=>{
        if (error) throw error;
        // res.status(201).send("item created successfully");
        console.log("item created");
        res.status(201).redirect("/items");
        // res.redirect('/items');
    });
    
    // res.send(`Received form data: Param1 - ${archetype}, Param2 - ${category}`);
};

// export const createItem = (req,res)=>{
//     // console.log('creating item');
//     // const item = req.body;
//     // items.push({...item});
//     // res.send(`item ${item.id} created`);
// };

// export const getItem = (req,res)=>{
//     // const { id } = req.params;
//     // // const foundItem = items.find((item)=>item.id==id);
//     // console.log(`finding ${req.params}`);
//     // res.send(foundItem);
// }

// export const updateItem = (req,res)=>{
//     const { id } = req.params;
//     const { category, archtype, name, imagepath, manufacturer } = req.body;
//     const upItem = items.find((item)=>item.id==id);
//     if(archtype){upItem.archtype = archtype;}
//     if(category){
//         upItem.category = category;
//     }
//     if(manufacturer){
//         upItem.manufacturer = manufacturer;
//     }
//     if(name){
//         upItem.name = name;
//     }
//     if(imagepath){
//         upItem.imagepath = imagepath;
//     }
//     console.log(`${req.params} update`);
//     res.send(`item ${id} updated with ${req.params}`);
// }

export const deleteItem = (req,res)=>{
    const id = parseInt(req.body.id);
    // res.send(`item ${id}`);
    // res.send(req.body.id);
    pool.query(queries.getItem,[id],(error, results)=>{
        if (!results.rows.length){
            res.send(`student ${id} doesn't exist`);
        }else{
            pool.query(queries.deleteItem,[id],(error, results)=>{
                if (error) throw error;
                res.status(200).redirect("/items");
            })
        }

    })
};

// export const deleteItem = (req,res)=>{
//     const { id } = req.params;
//     items = items.filter((item)=>item.id != id);
//     console.log(req.params);
//     res.send(`item ${id} deleted`);
// }

const meths = {
    getItems,
    addItem,
    newItem,
    deleteItem
};

export default meths;

// import { v4 as uuidv4 } from 'uuid';
// let items = [
//     {
//         "archtype":"stuff",
//         "category":"pc",
//         "manufacturer":"Voyager Space",
//         "name":"pic#1",
//         "imagepath":"https://picsum.photos/id/1/200/300",
//         id:uuidv4()
//     },
//     {
//         "archtype":"stuff",
//         "category":"monitor",
//         "manufacturer":"Voyager Space",
//         "name":"pic#2",
//         "imagepath":"https://picsum.photos/id/1/200/300",
//         id:uuidv4()
//     },
//     {
//         "archtype":"stuff",
//         "category":"misc",
//         "manufacturer":"Voyager Space",
//         "name":"pic#3",
//         "imagepath":"https://picsum.photos/id/1/200/300",
//         id:uuidv4()
//     },
//     {
//         "archtype":"stuff",
//         "category":"pens",
//         "manufacturer":"Voyager Space",
//         "name":"pic#4",
//         "imagepath":"https://picsum.photos/id/1/200/300",
//         id:uuidv4()
//     },
//     {
//         "archtype":"stuff",
//         "category":"office",
//         "manufacturer":"Voyager Space",
//         "name":"pic#5",
//         "imagepath":"https://picsum.photos/id/1/200/300",
//         id:uuidv4()
//     },
//     {
//         "archtype":"stuff",
//         "category":"desk",
//         "manufacturer":"Voyager Space",
//         "name":"pic#6",
//         "imagepath":"https://picsum.photos/id/1/200/300",
//         id:uuidv4()
//     }
// ];
