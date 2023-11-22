import { v4 as uuidv4 } from 'uuid';
let tickets = [
    {
        "timestamp":"2023-11-14",
        "sender":"Bejan",
        "receiver":"Voyager Space",
        "content":"Alienware laptop, LG monitor, power adapter",
        "status":"unapproved",
        id:uuidv4()
    },
    {
        "timestamp":"2023-11-14",
        "sender":"Donatello",
        "receiver":"Voyager Space",
        "content":"Alienware laptop, LG monitor, power adapter",
        "status":"unapproved",
        id:uuidv4()
    },
    {
        "timestamp":"2023-11-14",
        "sender":"Michaelangelo",
        "receiver":"Voyager Space",
        "content":"Alienware laptop, LG monitor, power adapter",
        "status":"unapproved",
        id:uuidv4()
    },
    {
        "timestamp":"2023-11-14",
        "sender":"Leonardo",
        "receiver":"Voyager Space",
        "content":"Alienware laptop, LG monitor, power adapter",
        "status":"unapproved",
        id:uuidv4()
    },
    {
        "timestamp":"2023-11-14",
        "sender":"Raphael",
        "receiver":"Voyager Space",
        "content":"Alienware laptop, LG monitor, power adapter",
        "status":"unapproved",
        id:uuidv4()
    },
    {
        "timestamp":"2023-11-14",
        "sender":"Splinter",
        "receiver":"Voyager Space",
        "content":"Alienware laptop, LG monitor, power adapter",
        "status":"unapproved",
        id:uuidv4()
    }
];

export const getTickets = (req,res)=>{
    console.log('getting all tickets');
    res.send(tickets);
}

export const createTicket = (req,res)=>{
    console.log('creating ticket');
    const ticket = req.body;
    tickets.push({...ticket, id:uuidv4()});
    res.send(`ticket ${ticket.id} created`);
};

export const getTicket = (req,res)=>{
    const { id } = req.params;
    const foundTicket = tickets.find((ticket)=>ticket.id==id);
    console.log(`finding ${req.params}`);
    res.send(foundTicket);
}

export const updateTicket = (req,res)=>{
    const { id } = req.params;
    const { timestamp, sender, receiver, content, status } = req.body;
    const upTicket = tickets.find((ticket)=>ticket.id==id);
    if(timestamp){upTicket.timestamp = timestamp;}
    if(receiver){
        upTicket.receiver = receiver;
    }
    if(content){
        upTicket.content = content;
    }
    if(sender){
        upTicket.sender = sender;
    }
    if(status){
        upTicket.status = status;
    }
    console.log(`${req.params} update`);
    res.send(`ticket ${id} updated with ${req.params}`);
}

export const deleteTicket = (req,res)=>{
    const { id } = req.params;
    tickets = tickets.filter((ticket)=>ticket.id != id);
    console.log(req.params);
    res.send(`ticket ${id} deleted`);
}
