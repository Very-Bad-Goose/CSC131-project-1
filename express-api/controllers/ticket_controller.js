import pool from '../config/postgres_conn.js';
import queries from '../models/ticket_queries.js';


//send the confirmation page
export const confirmation = (req,res)=>{
    res.status(200).render('../views/confirmation');
};
//send the admin confirmation page
export const adminConfirmation = (req,res)=>{
    res.status(200).render('../views/adminConfirmation');
};
//CREATE
//send the page/form for creating new
export const newTicket = (req,res)=>{
    res.status(200).render('../views/vtsAddTicket');
};
//send the page/form for creating new
export const newAdminTicket = (req,res)=>{
    res.status(200).render('../views/vtsAdminAddTicket');
};
//action to create new in db
export const addTicket = (req,res)=>{
    const {requestedby,receiver,contents,notes,dept} = req.body;
    pool.query(queries.addTicket,[requestedby,receiver,contents,notes,dept],(error, results)=>{
        if (error) throw error;
        console.log("new Ticket created", [requestedby,receiver,contents,notes,dept]);
        res.status(201).redirect("/tickets/confirmation");
    });
};
//action to create new admin ticket in db
export const addAdminTicket = (req,res)=>{
    const {requestedby,receiver,contents,notes,dept} = req.body;
    pool.query(queries.addTicket,[requestedby,receiver,contents,notes,dept],(error, results)=>{
        if (error) throw error;
        console.log("Ticket created", [requestedby,receiver,contents,notes,dept]);
        res.status(201).redirect("/tickets");
    });
};
//READ
//ticket index
export const getTickets = (req,res)=>{

    // const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    // if (!token) {
    //   return res.status(401).json({ message: 'Token not provided' });
    // }
  
    // // Verify the token
    // jwt.verify(token, secretKey, (err, decodedToken) => {
    //   if (err) {
    //     return res.status(403).json({ message: 'Invalid token' });
    //   }
  
    //   // Token is valid
    //   const userId = decodedToken.userId;
  
    //   // Access the protected resource or perform actions based on the user ID
    //   res.json({ message: `Access granted for user ID ${userId}` });

    //   pool.query(queries.getTickets,(error, results)=>{
    //     if (error) throw error;
    //     // res.status(200).json(results.rows);
    //     res.status(200).render('../views/vtsTicketPage01', { data: results.rows });
    // })



    // });

    





    pool.query(queries.getTickets,(error, results)=>{
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.status(200).render('../views/vtsTicketPage01', { data: results.rows });
    })
};
//specific ticket
export const getTicketByID = (req,res)=>{
    const id = parseInt(req.params.id);
    // res.status(200).json(id);
    pool.query(queries.getTicketByID,[id],(error, results)=>{
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.status(200).render('../views/vtsTicketPage02', { data: results.rows[0] });
    })
};
//UPDATE
//update page
export const modifyTicket = (req,res)=>{
    const id = parseInt(req.query.id);
    pool.query(queries.getTicketByID,[id],(error, results)=>{
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.status(200).render('../views/vtsUpdateTicket', { data: results.rows[0] });
    })
};
//update action
export const updateTicket = (req,res)=>{
    const {requestedby,receiver,contents,notes,dept,id} = req.body;
    pool.query(queries.updateTicket,[requestedby,receiver,contents,notes,dept,id],(error, results)=>{
        if (error) throw error;
        console.log("Ticket updated", [requestedby,receiver,contents,notes,dept,id]);
        res.status(201).redirect(`/Tickets/show${id}`);
    });
};
//DELETE
export const deleteTicket = (req,res)=>{
    const id = parseInt(req.body.id);
    // res.send(`Ticket ${id}`);
    // res.send(req.body.id);
    pool.query(queries.getTicketByID,[id],(error, results)=>{
        if (!results.rows.length){
            res.send(`ticket ${id} doesn't exist`);
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
    addAdminTicket,
    newAdminTicket,
    deleteTicket,
    confirmation,
    adminConfirmation
};

export default ticket_methods;