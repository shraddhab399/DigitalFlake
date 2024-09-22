// controllers/warehouseController.js
const Warehouse = require('../models/Warehouse');

exports.getAllWarehouses = async (req, res) => {
    try {
        const warehouses = await Warehouse.find().populate('state city');
        res.json(warehouses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch warehouses' });
    }
};

exports.createWarehouse = async (req, res) => {
    const { name, code, city, state } = req.body;
    try {
        const newWarehouse = new Warehouse({ name, code, city, state });
        await newWarehouse.save();
        res.status(201).json(newWarehouse);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create warehouse' });
    }
};

exports.updateWarehouse = async (req, res) => {
    const { id } = req.params;
    const { name, code, city, state } = req.body;
    try {
        const updatedWarehouse = await Warehouse.findByIdAndUpdate(id, { name, code, city, state }, { new: true });
        res.json(updatedWarehouse);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update warehouse' });
    }
};

exports.deleteWarehouse = async (req, res) => {
    const { id } = req.params;
    try {
        await Warehouse.findByIdAndDelete(id);
        res.json({ message: 'Warehouse deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete warehouse' });
    }
};
