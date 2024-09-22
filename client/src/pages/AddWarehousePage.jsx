import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { WarehouseContext } from '../contexts/WarehouseContext'; // Import context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link } from 'react-router-dom';

const AddWarehousePage = () => {
    const [warehouseName, setWarehouseName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const { addWarehouse } = useContext(WarehouseContext); // Get the addWarehouse function from context
    
    const states = ['California', 'Texas', 'New York'];
    const cities = ['Los Angeles', 'Houston', 'New York City'];
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWarehouse = {
            id: Math.random(), // Generate a random ID for now
            name: warehouseName,
            stateName: state,
            stateCode: state.substring(0, 2).toUpperCase(),
            city: city,
            status: 'Active',
        };

        addWarehouse(newWarehouse); // Add the new warehouse
        navigate('/warehouse'); // Redirect to the warehouse page
    };

    const handleCancel = () => {
        navigate('/warehouse'); // Redirect to the warehouse page
    };

    return (
        <div>
            
            <Navbar />
            <div className="flex h-screen ">
                <div className="flex flex-col space-y-2 bg-gray-200 p-4 w-1/4">
                    
                    <Link 
                        to="/home" 
                        className="flex items-center text-black-500 hover:bg-orange-50  transition duration-300"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link 
                        to="/state" 
                        className="flex items-center text-black-500   hover:bg-orange-50 transition duration-300"
                    >
                        <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" /> State
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link 
                        to="/city" 
                        className="flex items-center text-black-500  hover:bg-orange-50  transition duration-300"
                    >
                        <FontAwesomeIcon icon={faCity} className="mr-2" /> City
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link 
                        to="/warehouse" 
                        className="flex items-center text-black-500 hover:bg-orange-50  transition duration-300"
                    >
                        <FontAwesomeIcon icon={faBuilding} className="mr-2" /> Warehouse
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                </div>
                {/* Main Content */}
                <div className="bg-white flex-grow shadow-lg border border-gray-300 rounded-lg m-2 p-6 relative">
                    <h1 className="text-2xl font-bold mb-6">Add New Warehouse</h1>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="grid grid-cols-3 gap-4">
                            {/* Warehouse Name */}
                            <div>
                                <label className="block text-gray-700">Warehouse Name</label>
                                <input 
                                    type="text" 
                                    value={warehouseName} 
                                    onChange={(e) => setWarehouseName(e.target.value)} 
                                    className="border border-gray-400 rounded px-4 py-2 w-full" 
                                    placeholder="Enter warehouse name"
                                />
                            </div>

                            {/* State */}
                            <div>
                                <label className="block text-gray-700">State</label>
                                <select 
                                    value={state} 
                                    onChange={(e) => setState(e.target.value)} 
                                    className="border border-gray-400 rounded px-4 py-2 w-full"
                                >
                                    <option value="">Select a state</option>
                                    {states.map((state) => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-gray-700">City</label>
                                <select 
                                    value={city} 
                                    onChange={(e) => setCity(e.target.value)} 
                                    className="border border-gray-400 rounded px-4 py-2 w-full"
                                >
                                    <option value="">Select a city</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute bottom-4 right-4 flex space-x-4">
                            <button 
                                type="button" 
                                onClick={handleCancel} 
                                className="bg-white-500 text-black border border-black  rounded-full px-4 py-2 mr-4  transition duration-300"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="bg-violet-950 text-white rounded-full px-4 py-2  transition duration-300"
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

export default AddWarehousePage;
