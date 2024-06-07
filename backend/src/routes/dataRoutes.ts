import { Router } from 'express';
import { fetchData, writeData } from '../controllers/dataController';

const router = Router();

router.get('/read-csv', fetchData);
router.post('/write-csv', writeData);

export default router;
