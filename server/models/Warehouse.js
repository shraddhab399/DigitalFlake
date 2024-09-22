// models/Warehouse.js
const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true }
});

module.exports = mongoose.model('Warehouse', warehouseSchema);
