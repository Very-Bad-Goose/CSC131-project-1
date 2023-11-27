const getTickets = "select * from Tickets";
const getTicket = "select * from Tickets where id = $1";
const checkIDExists = "select * FROM Tickets s where s.id = $1";
const addTicket = "insert into Tickets (requestedby,receiver,contents,notes,dept) values ($1,$2,$3,$4,$5)";
const deleteTicket = "delete from Tickets where id = $1";
const updateTicket = "update Tickets set requestedby = $1, receiver = $2, contents = $3, notes = $5, dept = $6 WHERE id = $7";

const ticket_meths = {
    getTickets,
    getTicket,
    checkIDExists,
    addTicket,
    deleteTicket,
    updateTicket
};

export default ticket_meths;