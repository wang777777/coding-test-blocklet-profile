import { Router } from 'express';
import $get from './$get';
import $post from './$post';
import $put from './$put';

const userRouter = Router();

userRouter.get('/', $get);
userRouter.post('/', $post);
userRouter.put('/:id', $put);

export default userRouter;
