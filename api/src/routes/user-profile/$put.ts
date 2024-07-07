import type { Request, Response } from 'express';
import userDb from './db';

export default async function $put(req: Request, res: Response) {
  const { body, params } = req;
  if (!params.id) {
    return res.status(400).send('id is required');
  }

  if (!body.username || !body.email || !body.phone) {
    return res.status(400).send('username, email, phone are required');
  }

  const user = await userDb.update({ _id: params.id }, { $set: body });

  return res.json(user);
}
