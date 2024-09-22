
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CityContext } from '../contexts/CityContext'; // Import context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link } from 'react-router-dom';
const AddCityPage = () => {
    const [cityName, setCityName] = useState('');
    const [cityCode, setCityCode] = useState('');
    const [state, setState] = useState('');
    const { addCity } = useContext(CityContext);

    const states = ['California', 'Texas', 'New York']; // Predefined states
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCity = {
            id: Math.random(), // Generate random ID for the city
            name: cityName,
            code: cityCode,
            state: state,
        };

        addCity(newCity); // Add the new city
        navigate('/city'); // Redirect back to the city page
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
            <div className="flex h-screen">
                <div className="flex-grow bg-white shadow-lg border border-gray-300 rounded-lg m-2 p-6 relative">
                    <h1 className="text-2xl font-bold mb-6">Add New City</h1>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-gray-700">City Name</label>
                                <input
                                    type="text"
                                    value={cityName}
                                    onChange={(e) => setCityName(e.target.value)}
                                    className="border border-gray-400 rounded px-4 py-2 w-full"
                                    placeholder="Enter city name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">City Code</label>
                                <input
                                    type="text"
                                    value={cityCode}
                                    onChange={(e) => setCityCode(e.target.value)}
                                    className="border border-gray-400 rounded px-4 py-2 w-full"
                                    placeholder="Enter city code"
                                />
                            </div>
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
                        </div>

                        <div className="absolute bottom-4 right-4 flex space-x-4">
                            <button
                                type="button"
                                onClick={() => navigate('/city')}
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
        </div>
    );
};

export default AddCityPage;
