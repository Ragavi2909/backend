const express = require('express');
const { getProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product browsing APIs
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *       500:
 *         description: Server error
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product fetched successfully
 *       404:
 *         description: Product not found
 */
router.get('/:id', getProductById);

module.exports = router;
