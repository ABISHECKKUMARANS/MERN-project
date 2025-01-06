
import express from 'express';
import { create, deleted, fetch ,update} from '../controller/Usercontroller.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/', update);
router.delete('/delete/', deleted);

export default router;