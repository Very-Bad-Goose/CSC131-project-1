import express from 'express';
import { 
    newTicket,
    getTickets,
    getTicketByID,
    addTicket,
    addAdminTicket,
    newAdminTicket,
    modifyTicket,
    updateTicket,
    deleteTicket,
    confirmation,
    adminConfirmation
} from '../controllers/ticket_controller.js';

const router = express.Router();

router.get('/confirmation', confirmation);
router.get('/adminConfirmation', adminConfirmation);
router.get('/new/admin', newAdminTicket);
router.get('/new', newTicket);
router.get('/', getTickets);
router.get('/show:id', getTicketByID);
router.post('/', addTicket);
router.post('/admin', addAdminTicket);
router.get('/modify', modifyTicket);
router.post('/update', updateTicket);
router.post('/delete', deleteTicket);

export default router;



