import { Request, Response } from 'express';


export class TicketController {
  // DI - WssService
  constructor() {}

    public getTickets = async (req:Request, res:Response) => {
      return res.status( 200 ).json( { message: 'ok from getTickets' } )
    }

    public getLastTicket = async (req:Request, res:Response) => {
      return res.status(200).json({message: 'ok from getLastTicket'})
    }

    public getPending = async (req:Request, res:Response) => {
      return res.status(200).json({message: 'ok from getPending'})
    }
    
    public createTicket = async (req:Request, res:Response) => {
      return res.status(200).json({message: 'ok from createTicket'})
    }

  public drawTicket = async ( req: Request, res: Response ) => {
      return res.status(200).json({message: 'ok from drawTicket'})
    }

  public completeTicket = async ( req: Request, res: Response ) => {
      return res.status(200).json({message: 'ok from completeTicket'})
    }

  public getCurrentTickets = async ( req: Request, res: Response ) => {
      return res.status(200).json({message: 'ok from getCurrentTickets'})
    }
}