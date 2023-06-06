import express from 'express'
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js'

router.get('/list', getProducts)
router.get('/:id', getProductById)

export default router