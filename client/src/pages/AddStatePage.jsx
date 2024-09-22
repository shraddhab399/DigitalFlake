import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { StateContext } from '../contexts/StateContext'; // Import context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link } from 'react-router-dom';

const AddStatePage = () => {
    const [stateName, setStateName] = useState('');
    const [stateCode, setStateCode] = useState('');
    const { addState } = useContext(StateContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newState = {
            id: Math.random(), // Generate random ID for the state
            name: stateName,
            code: stateCode,
        };

        addState(newState); // Add the new state
        navigate('/state'); // Redirect back to the state page
    };

    return (
        <div>
            <Navbar />
            <div className="flex h-screen">
                <div className="flex flex-col space-y-2 bg-gray-200 p-4 w-1/4">
                    <Link 
                        to="/home" 
                        className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link 
                        to="/state" 
                        className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300"
                    >
                        <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" /> State
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link 
                        to="/city" 
                        className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300"
                    >
                        <FontAwesomeIcon icon={faCity} className="mr-2" /> City
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link 
                        to="/warehouse" 
                        className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300"
                    >
                        <FontAwesomeIcon icon={faBuilding} className="mr-2" /> Warehouse
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                </div>

                <div className="flex-grow bg-white shadow-lg border border-gray-300 rounded-lg m-2 p-6 relative">
                    <h1 className="text-2xl font-bold mb-6">Add New State</h1>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">State Name</label>
                                <input
                                    type="text"
                                    value={stateName}
                                    onChange={(e) => setStateName(e.target.value)}
                                    className="border border-gray-400 rounded px-4 py-2 "
                                    placeholder="Enter state name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">State Code</label>
                                <input
                                    type="text"
                                    value={stateCode}
                                    onChange={(e) => setStateCode(e.target.value)}
                                    className="border border-gray-400 rounded px-4 py-2 "
                                    placeholder="Enter state code"
                                />
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-4 flex space-x-4">
                            <button
                                type="button"
                                onClick={() => navigate('/state')}
                                className="bg-white-500 text-black border border-black rounded-full px-4 py-2 mr-4 transition duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-violet-950 text-white rounded-full px-4 py-2 transition duration-300"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStatePage;
