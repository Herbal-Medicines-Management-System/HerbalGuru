import express from 'express';
import {
  createAdd,
  deleteAdd,
  getAdd,
  getAdds,
} from '../controllers/add.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

router.post('/', verifyToken, createAdd);
router.delete('/:id', verifyToken, deleteAdd);
router.get('/single/:id', verifyToken, getAdd);
router.get('/', verifyToken, getAdds);

export default router;
