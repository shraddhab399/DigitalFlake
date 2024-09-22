import React, { createContext, useState } from 'react';

// Create a WarehouseContext
export const WarehouseContext = createContext();

// WarehouseProvider component to wrap around your app
export const WarehouseProvider = ({ children }) => {
    const [warehouses, setWarehouses] = useState([
        { id: 1, name: 'abc Warehouse', stateName: 'California', stateCode: 'CA', status: 'Active' }
    ]);

    // Function to add a new warehouse with sequential ID
    const addWarehouse = (newWarehouse) => {
        const newId = warehouses.length > 0 
            ? warehouses[warehouses.length - 1].id + 1 // Increment based on the last ID
            : 1; // Start with ID 1 if no warehouses exist

        setWarehouses([...warehouses, { ...newWarehouse, id: newId }]);
    };

    // Function to edit an existing warehouse by ID
    const editWarehouse = (updatedWarehouse) => {
        setWarehouses((prevWarehouses) =>
            prevWarehouses.map((warehouse) =>
                warehouse.id === updatedWarehouse.id ? { ...warehouse, ...updatedWarehouse } : warehouse
            )
        );
    };

    // Function to delete a warehouse by ID
    const deleteWarehouse = (id) => {
        setWarehouses(warehouses.filter(warehouse => warehouse.id !== id));
    };

    return (
        <WarehouseContext.Provider value={{ warehouses, addWarehouse, editWarehouse, deleteWarehouse }}>
            {children}
        </WarehouseContext.Provider>
    );
};
