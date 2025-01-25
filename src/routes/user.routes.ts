import { Router } from 'express';

import { loginHandler, registerHandler } from '../controllers/user.controllers';

const userRouter = Router();

//  prefix: /api/v1/users

userRouter.post('/register', registerHandler);
userRouter.post('/login', loginHandler);

export default userRouter;
