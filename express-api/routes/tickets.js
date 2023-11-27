import express from 'express';
import { 
    // createTicket,
    newTicket,
    getTickets,
    addTicket,
    // getTicket,
    // updateTicket,
    // deleteTicket 
} from '../controllers/ticket_controller.js';

const router = express.Router();

router.get('/new', newTicket);
router.get('/', getTickets);
router.post('/', addTicket);
// router.post('/', createTicket);
// router.get('/:id', getTicket);
// router.patch('/:id', updateTicket);
// router.delete('/:id', deleteTicket);

export default router;

//old functions
//all start from /tickets
// router.get('/',(req,res)=>{
//     console.log(tickets);
//     res.send(tickets);
// });

// router.post('/',(req,res)=>{
//     console.log('post route reached');
//     console.log(req.body);
//     const ticket = req.body;
//     tickets.push({...ticket, id:uuidv4()});
//     res.send(tickets);
// });

// /users/2 => req.params {id:2}
// router.get('/:id',(req,res)=>{
//     const { id } = req.params;
//     const foundTicket = tickets.find((ticket)=>ticket.id==id);
//     console.log(req.params);
//     res.send(foundTicket);
// });

// router.delete('/:id',(req,res)=>{
//     const { id } = req.params;
//     tickets = tickets.filter((ticket)=>ticket.id != id);
//     console.log(req.params);
//     res.send(tickets);
// });

// router.patch('/:id',(req,res)=>{
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
//     console.log(req.params);
//     res.send(tickets);
// });



