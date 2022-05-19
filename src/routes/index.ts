import { Router } from 'express';
import { establishmentsRoutes } from './establishments.routes';

const router = Router();

router.use('/establishments', establishmentsRoutes);

export { router };
