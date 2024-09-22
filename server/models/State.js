// models/State.js
const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('State', stateSchema);
