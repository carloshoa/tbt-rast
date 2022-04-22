import { Router } from 'express';

import authController from './controllers/authController';
import itensController from './controllers/itensController';

const router = Router();

router.use('/auth', authController);
router.use('/itens', itensController);

export default router;
