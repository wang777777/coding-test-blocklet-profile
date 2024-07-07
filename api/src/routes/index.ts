import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';
import userRouter from './user-profile';

const router = Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));

router.use('/user-profile', userRouter);

export default router;
