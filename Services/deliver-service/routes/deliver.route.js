import express from 'express';
import {
  createDeliver,
  deleteDeliver,
  getDeliver,
  getDelivers,
  updateDelivers,
} from '../controllers/deliver.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

router.post('/', verifyToken, createDeliver);
router.delete('/:id', verifyToken, deleteDeliver);
router.get('/single/:id', getDeliver);
router.get('/', getDelivers);
router.put('/:id',verifyToken , updateDelivers);

export default router;
