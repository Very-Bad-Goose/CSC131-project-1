const checkIDExists = "select * FROM Tickets s where s.id = @id";
//create
const addTicket = "insert into Tickets (requestedby,receiver,contents,notes,dept) values (@requestedby, @receiver, @contents, @notes, @dept)";
//read
const getTickets = "select * from Tickets";
const getTicketByID = "select * from Tickets where @id = 'id'";
//update
//requestedby,receiver,contents,notes,dept
const updateTicket = "update Tickets set requestedby = @requestedby, receiver = @receiver, contents = @contents, notes = @notes, dept = @dept WHERE id = @id";
//delete
const deleteTicket = "update Tickets set deleted = TRUE where id = @id";

const ticket_queries = {
    addTicket,
    getTickets,
    getTicketByID,
    updateTicket,
    deleteTicket,
    checkIDExists
};

export default tdticket_queries;