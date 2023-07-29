import { Router } from 'express';
import museumService from '../services/museumService.js';

const router = Router();

router.get('/count/:payload', museumService);
router.post('/count', museumService);

export default router;
