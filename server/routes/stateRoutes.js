// routes/stateRoutes.js
const express = require('express');
const router = express.Router();
const { getAllStates, createState, updateState, deleteState } = require('../controllers/stateController');

router.get('/', getAllStates);
router.post('/', createState);
router.put('/:id', updateState);
router.delete('/:id', deleteState);

module.exports = router;
