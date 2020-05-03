import { Request, Response } from 'express'
import * as path from 'path';

const render = (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
}

export default {
  render
}