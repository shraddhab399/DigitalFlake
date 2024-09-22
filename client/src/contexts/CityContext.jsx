import React, { createContext, useState } from 'react';

// Create a CityContext
export const CityContext = createContext();

// CityProvider component to wrap around your app
export const CityProvider = ({ children }) => {
    const [cities, setCities] = useState([
        { id: 1, name: 'Los Angeles', code: 'LA', state: 'California' }
    ]);

    // Function to add a new city with sequential ID
    const addCity = (newCity) => {
        const newId = cities.length > 0 
            ? cities[cities.length - 1].id + 1 // Increment based on the last ID
            : 1; // Start with ID 1 if no cities exist

        setCities([...cities, { ...newCity, id: newId }]);
    };
// Function to edit an existing city by ID
const editCity = (updatedCity) => {
    setCities((prevCities) =>
        prevCities.map((city) =>
            city.id === updatedCity.id ? { ...city, ...updatedCity } : city
        )
    );
};

    // Function to delete a city by ID
    const deleteCity = (id) => {
        setCities(cities.filter(city => city.id !== id));
    };

    return (
        <CityContext.Provider value={{ cities, addCity, editCity, deleteCity }}>
            {children}
        </CityContext.Provider>
    );
};
