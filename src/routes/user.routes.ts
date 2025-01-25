import { Router } from 'express';

import { registerHandler } from '../controllers/user.controllers';

const userRouter = Router();

//  prefix: /api/v1/users

userRouter.post('/register', registerHandler);

export default userRouter;
