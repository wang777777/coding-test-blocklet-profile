import type { Request, Response } from 'express';
import userDb from './db';

export default async function $post(req: Request, res: Response) {
  const { body } = req;
  if (!body.username || !body.email || !body.phone) {
    return res.status(400).send('username, email, phone are required');
  }

  const user = await userDb.insert(req.body);
  user.id = user._id;
  delete user._id;

  return res.json(user);
}
