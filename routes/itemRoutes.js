const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// CRUD Routes
router.post('/items', itemController.createItem); // Create
router.get('/itemget', itemController.getAllItems); // Read all
router.get('/items/:id', itemController.getItemById); // Read one
router.put('/items/:id', itemController.updateItem); // Update
router.delete('/items/:id', itemController.deleteone); // Delete
router.delete('/items', itemController.deletemany); // Delete

module.exports = router;