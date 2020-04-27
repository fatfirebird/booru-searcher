import Booru from "../api/api";
import { Request, Response } from 'express';

const render = (req: Request, res: Response): void => {
  res.render('search');
}

const find = async (req: Request, res: Response) => {
  const { order, tags, booru, mode, page } = req.body;
  const data = await Booru.search({tag:tags, url:booru}, mode, order, page);
  console.log(data)
  res.json(data)
}

export default {
  render,
  find
}