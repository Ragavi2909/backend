const express = require('express');
const { addOrderItems, getOrderById } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management APIs
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderItems
 *               - shippingAddress
 *               - paymentMethod
 *               - totalPrice
 *             properties:
 *               orderItems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product:
 *                       type: string
 *                       example: 65f1a2b3c9d1e123456789ab
 *                     name:
 *                       type: string
 *                       example: iPhone 15
 *                     qty:
 *                       type: number
 *                       example: 1
 *                     price:
 *                       type: number
 *                       example: 79999
 *               shippingAddress:
 *                 type: object
 *                 properties:
 *                   address:
 *                     type: string
 *                     example: Chennai, Tamil Nadu
 *                   city:
 *                     type: string
 *                     example: Chennai
 *                   postalCode:
 *                     type: string
 *                     example: 600001
 *                   country:
 *                     type: string
 *                     example: India
 *               paymentMethod:
 *                 type: string
 *                 example: COD
 *               totalPrice:
 *                 type: number
 *                 example: 79999
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: No order items provided
 *       401:
 *         description: Not authorized
 */
router.post('/', protect, addOrderItems);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order fetched successfully
 *       404:
 *         description: Order not found
 *       401:
 *         description: Not authorized
 */
router.get('/:id', protect, getOrderById);

module.exports = router;
