import { Request, Response } from 'express'

import { Pizza } from '../models/pizza'
//primeira página do pages
export const home = (req: Request, res: Response) => {
  let list = Pizza.getAll()

  res.render('pages/page', {
    list
  })
}