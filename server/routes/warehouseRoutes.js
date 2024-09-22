// routes/warehouseRoutes.js
const express = require('express');
const router = express.Router();
const { getAllWarehouses, createWarehouse, updateWarehouse, deleteWarehouse } = require('../controllers/warehouseController');

router.get('/', getAllWarehouses);
router.post('/', createWarehouse);
router.put('/:id', updateWarehouse);
router.delete('/:id', deleteWarehouse);

module.exports = router;
