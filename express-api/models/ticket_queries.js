const checkIDExists = "select * FROM Tickets s where s.id = $1";
//create
const addTicket = "insert into Tickets (requestedby,receiver,contents,notes,dept) values ($1,$2,$3,$4,$5)";
//read
const getTickets = "select * from Tickets";
const getTicketByID = "select * from Tickets where id = $1";
//update
const updateTicket = "update Tickets set requestedby = $1, receiver = $2, contents = $3, notes = $5, dept = $6 WHERE id = $7";
//delete
const deleteTicket = "delete from Tickets where id = $1";

const ticket_queries = {
    addTicket,
    getTickets,
    getTicketByID,
    updateTicket,
    deleteTicket,
    checkIDExists
};

export default ticket_queries;