import { Router } from 'express';

import { clientRoutes } from './client.routes';
import { addressRoutes } from './address.routes';

const router = Router();

router.use('/client', clientRoutes);
router.use('/address', addressRoutes);

export { router };
