import { Router } from 'express';
import {create, get} from '../controllers/excelController';

const router = Router();

router.get('/excel',get);
router.post('/excel',create);

export default router;