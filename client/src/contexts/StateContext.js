import React, { createContext, useState } from 'react';

// Create the context
export const StateContext = createContext();

// StateProvider component
const StateProvider = ({ children }) => {
    // Initialize state list with some default values
    const [states, setStates] = useState([
        { id: 1, name: 'California', code: 'CA' },
        { id: 2, name: 'Texas', code: 'TX' },
        { id: 3, name: 'New York', code: 'NY' },
    ]);

    // Function to add a new state
    const addState = (newState) => {
        setStates([...states, { ...newState, id: states.length + 1 }]); // Auto incrementing ID
    };

    // Function to edit an existing state
    const editState = (updatedState) => {
        setStates(
            states.map((state) => (state.id === updatedState.id ? updatedState : state))
        );
    };

    // Function to delete a state by ID
    const deleteState = (stateId) => {
        setStates(states.filter((state) => state.id !== stateId));
    };

    // Context value that will be passed to consumers
    return (
        <StateContext.Provider value={{ states, addState, editState, deleteState }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;
