// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv
const stateRoutes = require('./routes/state'); // Import state routes
const cityRoutes = require('./routes/city'); // Import city routes
const warehouseRoutes = require('./routes/warehouse'); // Import warehouse routes

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

// Use MongoDB URI from environment variable
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/inventoryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Use routes for different entities
app.use('/api/states', stateRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/warehouses', warehouseRoutes);

// Set the PORT from environment variable or use default
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
