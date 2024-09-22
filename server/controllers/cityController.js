// controllers/cityController.js
const City = require('../models/City');

exports.getAllCities = async (req, res) => {
    try {
        const cities = await City.find().populate('state');
        res.json(cities);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cities' });
    }
};

exports.createCity = async (req, res) => {
    const { name, code, state } = req.body;
    try {
        const newCity = new City({ name, code, state });
        await newCity.save();
        res.status(201).json(newCity);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create city' });
    }
};

exports.updateCity = async (req, res) => {
    const { id } = req.params;
    const { name, code, state } = req.body;
    try {
        const updatedCity = await City.findByIdAndUpdate(id, { name, code, state }, { new: true });
        res.json(updatedCity);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update city' });
    }
};

exports.deleteCity = async (req, res) => {
    const { id } = req.params;
    try {
        await City.findByIdAndDelete(id);
        res.json({ message: 'City deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete city' });
    }
};
