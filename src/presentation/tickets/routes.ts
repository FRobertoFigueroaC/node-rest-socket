import {Router} from 'express'
import { TicketController } from './controller';

export class TicketRoutes {

  static get routes(){
    const router = Router();
    const ticketController = new TicketController();

    router.get('/', ticketController.getTickets);
    router.get('/last', ticketController.getLastTicket);
    router.get('/pending', ticketController.getPending);
    
    router.post('/', ticketController.createTicket);
    router.put('/draw/:desk', ticketController.drawTicket);
    router.put('/done/:ticketId', ticketController.completeTicket);

    router.get('/working-on', ticketController.getCurrentTickets);

    return router;
  }
  
}