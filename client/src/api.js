// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this if your backend is hosted elsewhere

export const fetchStates = async () => {
    const response = await axios.get(`${API_URL}/states`);
    return response.data;
};

export const fetchCities = async () => {
    const response = await axios.get(`${API_URL}/cities`);
    return response.data;
};

export const fetchWarehouses = async () => {
    const response = await axios.get(`${API_URL}/warehouses`);
    return response.data;
};

export const addState = async (state) => {
    const response = await axios.post(`${API_URL}/states`, state);
    return response.data;
};

export const addCity = async (city) => {
    const response = await axios.post(`${API_URL}/cities`, city);
    return response.data;
};

export const addWarehouse = async (warehouse) => {
    const response = await axios.post(`${API_URL}/warehouses`, warehouse);
    return response.data;
};

// You can add more functions for editing and deleting as needed
