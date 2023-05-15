import express from 'express'

import { getProducts, getProductsByCode } from '../controllers/products'
import { getPacks } from '../controllers/packs'

const router = express.Router()

router.get('/products', getProducts)
router.get('/products/:code', getProductsByCode)

router.get('/packs', getPacks)

export default router

