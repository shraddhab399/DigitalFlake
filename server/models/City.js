// models/City.js
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true }
});

module.exports = mongoose.model('City', citySchema);
    