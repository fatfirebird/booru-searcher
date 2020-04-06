import { Request, Response } from 'express';

const render = (req: Request, res: Response): void => {
  res.render('search');
}

export default {
  render
}