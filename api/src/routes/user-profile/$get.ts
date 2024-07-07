import type { Request, Response } from 'express';
import userDb from './db';

export default async function $get(_req: Request, res: Response) {
  try {
    const user = await userDb.findOne({});
    if (user) {
      user.id = user._id;
      delete user._id;
    }

    return res.json(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}
