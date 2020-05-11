import { Request, Response } from 'express';
import userModel from "../models/User";

const registration = async (req: Request, res: Response) => {
  console.log(req.body);
  await userModel.create(req.body)
    .then(() => res.json(req.body))
    .catch(err => res.status(402).json({message: err.errmsg}));
}

const login = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.query;

    const user = await userModel.findOne({login});
    if (!user) throw new Error('Неправильный логин или пароль');

    const compared = await user.comparePassword(password);
    if (!compared) throw new Error('Неправильный логин или пароль');

    res.json(req.query);
  } catch (err) {
    res.status(401);
    res.json({message: err.messag});
  }
}

export default {
  registration,
  login
}