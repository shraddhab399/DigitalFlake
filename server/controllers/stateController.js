// controllers/stateController.js
const State = require('../models/State');

exports.getAllStates = async (req, res) => {
    try {
        const states = await State.find();
        res.json(states);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch states' });
    }
};

exports.createState = async (req, res) => {
    const { name, code } = req.body;
    try {
        const newState = new State({ name, code });
        await newState.save();
        res.status(201).json(newState);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create state' });
    }
};

exports.updateState = async (req, res) => {
    const { id } = req.params;
    const { name, code } = req.body;
    try {
        const updatedState = await State.findByIdAndUpdate(id, { name, code }, { new: true });
        res.json(updatedState);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update state' });
    }
};

exports.deleteState = async (req, res) => {
    const { id } = req.params;
    try {
        await State.findByIdAndDelete(id);
        res.json({ message: 'State deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete state' });
    }
};
