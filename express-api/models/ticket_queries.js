const checkIDExists = "select * FROM Tickets s where s.id = $1";
//create
const addTicket = "insert into Tickets (requestedby,receiver,contents,notes,dept) values ($1,$2,$3,$4,$5)";
//read
const getTickets = "select * from Tickets";
const getTicketByID = "select * from Tickets where id = $1";
//update
//requestedby,receiver,contents,notes,dept
const updateTicket = "update Tickets set requestedby = $1, receiver = $2, contents = $3, notes = $4, dept = $5 WHERE id = $6";
//delete
const deleteTicket = "update Tickets set deleted = TRUE where id = $1";

const ticket_queries = {
    addTicket,
    getTickets,
    getTicketByID,
    updateTicket,
    deleteTicket,
    checkIDExists
};

export default ticket_queries;