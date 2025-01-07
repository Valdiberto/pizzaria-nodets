import { Request, Response } from 'express'


//primeira página do pages
export const home = (req: Request, res: Response) => {
  res.send('home no controller!')
}