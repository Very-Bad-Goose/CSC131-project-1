import pool from '../config/postgres_conn.js';
import queries from '../models/ticket_queries.js';

//CREATE
//send the page/form for creating new
export const newTicket = (req,res)=>{
    res.status(200).render('../views/vtsAddTicket');
};
//action to create new in db
export const addTicket = (req,res)=>{
    const {requestedby,receiver,contents,notes,dept} = req.body;
    pool.query(queries.addTicket,[requestedby,receiver,contents,notes,dept],(error, results)=>{
        if (error) throw error;
        console.log("Ticket created", [requestedby,receiver,contents,notes,dept]);
        res.status(201).redirect("/Tickets");
    });
};
//READ
//ticket index
export const getTickets = (req,res)=>{
    pool.query(queries.getTickets,(error, results)=>{
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.status(200).render('../views/vtsTicketPage01', { data: results.rows });
    })
};
//specific ticket
export const getTicketByID = (req,res)=>{
    const id = parseInt(req.body.id);
    // res.status(200).json(id);
    pool.query(queries.getTicketByID,[id],(error, results)=>{
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.status(200).render('../views/vtsTicketPage02', { data: results.rows[0] });
    })
};
//DELETE
export const deleteTicket = (req,res)=>{
    const id = parseInt(req.body.id);
    // res.send(`Ticket ${id}`);
    // res.send(req.body.id);
    pool.query(queries.getTicket,[id],(error, results)=>{
        if (!results.rows.length){
            res.send(`student ${id} doesn't exist`);
        }else{
            pool.query(queries.deleteTicket,[id],(error, results)=>{
                if (error) throw error;
                res.status(200).redirect("/Tickets");
            })
        }

    })
};


const ticket_methods = {
    getTickets,
    getTicketByID,
    addTicket,
    newTicket,
    deleteTicket
};

export default ticket_methods;


// export const getTickets = (req,res)=>{
//     console.log('getting all tickets');
//     res.send(tickets);
// }

// export const createTicket = (req,res)=>{
//     console.log('creating ticket');
//     const ticket = req.body;
//     tickets.push({...ticket, id:uuidv4()});
//     res.send(`ticket ${ticket.id} created`);
// };

// export const getTicket = (req,res)=>{
//     const { id } = req.params;
//     const foundTicket = tickets.find((ticket)=>ticket.id==id);
//     console.log(`finding ${req.params}`);
//     res.send(foundTicket);
// }

// export const updateTicket = (req,res)=>{
//     const { id } = req.params;
//     const { timestamp, sender, receiver, content, status } = req.body;
//     const upTicket = tickets.find((ticket)=>ticket.id==id);
//     if(timestamp){upTicket.timestamp = timestamp;}
//     if(receiver){
//         upTicket.receiver = receiver;
//     }
//     if(content){
//         upTicket.content = content;
//     }
//     if(sender){
//         upTicket.sender = sender;
//     }
//     if(status){
//         upTicket.status = status;
//     }
//     console.log(`${req.params} update`);
//     res.send(`ticket ${id} updated with ${req.params}`);
// }

// export const deleteTicket = (req,res)=>{
//     const { id } = req.params;
//     tickets = tickets.filter((ticket)=>ticket.id != id);
//     console.log(req.params);
//     res.send(`ticket ${id} deleted`);
// }

// import { v4 as uuidv4 } from 'uuid';
// let tickets = [
//     {
//         "timestamp":"2023-11-14",
//         "sender":"Bejan",
//         "receiver":"Voyager Space",
//         "content":"Alienware laptop, LG monitor, power adapter",
//         "status":"unapproved",
//         id:uuidv4()
//     },
//     {
//         "timestamp":"2023-11-14",
//         "sender":"Donatello",
//         "receiver":"Voyager Space",
//         "content":"Alienware laptop, LG monitor, power adapter",
//         "status":"unapproved",
//         id:uuidv4()
//     },
//     {
//         "timestamp":"2023-11-14",
//         "sender":"Michaelangelo",
//         "receiver":"Voyager Space",
//         "content":"Alienware laptop, LG monitor, power adapter",
//         "status":"unapproved",
//         id:uuidv4()
//     },
//     {
//         "timestamp":"2023-11-14",
//         "sender":"Leonardo",
//         "receiver":"Voyager Space",
//         "content":"Alienware laptop, LG monitor, power adapter",
//         "status":"unapproved",
//         id:uuidv4()
//     },
//     {
//         "timestamp":"2023-11-14",
//         "sender":"Raphael",
//         "receiver":"Voyager Space",
//         "content":"Alienware laptop, LG monitor, power adapter",
//         "status":"unapproved",
//         id:uuidv4()
//     },
//     {
//         "timestamp":"2023-11-14",
//         "sender":"Splinter",
//         "receiver":"Voyager Space",
//         "content":"Alienware laptop, LG monitor, power adapter",
//         "status":"unapproved",
//         id:uuidv4()
//     }
// ];