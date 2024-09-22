import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CityContext } from '../contexts/CityContext'; // Import CityContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link } from 'react-router-dom';

const EditCityPage = () => {
    const { id } = useParams(); // Get city ID from URL parameters
    const { cities, editCity } = useContext(CityContext); // Get context data from CityContext

    const [cityName, setCityName] = useState('');
    const [cityCode, setCityCode] = useState('');
    const [state, setState] = useState('');

    const states = ['California', 'Texas', 'New York']; // Sample states for dropdown

    const navigate = useNavigate();

    // Load the city data when the component mounts
    useEffect(() => {
        const cityToEdit = cities.find((city) => city.id === parseInt(id));
        if (cityToEdit) {
            setCityName(cityToEdit.name);
            setCityCode(cityToEdit.code);
            setState(cityToEdit.state);
        }
    }, [id, cities]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCity = {
            id: parseInt(id), // Keep the same ID
            name: cityName,
            code: cityCode,
            state: state,
        };

        editCity(updatedCity); // Use editCity instead of addCity
        navigate('/city'); // Redirect to the city list page
    };

    const handleCancel = () => {
        navigate('/city'); // Redirect to city page
    };

    return (
        <div>
            <Navbar />
            <div className="flex h-screen">
                <div className="flex flex-col space-y-2 bg-gray-200 p-4 w-1/4">
                    <Link to="/home" className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300">
                        <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link to="/state" className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300">
                        <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" /> State
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link to="/city" className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300">
                        <FontAwesomeIcon icon={faCity} className="mr-2" /> City
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                    <Link to="/warehouse" className="flex items-center text-black-500 hover:bg-orange-50 transition duration-300">
                        <FontAwesomeIcon icon={faBuilding} className="mr-2" /> Warehouse
                        <FontAwesomeIcon icon={faArrowRight} className="ml-auto" />
                    </Link>
                </div>

                {/* Main Content */}
                <div className="bg-white flex-grow shadow-lg border border-gray-300 rounded-lg m-2 p-6 relative">
                    <h1 className="text-2xl font-bold mb-6">Edit City</h1>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="grid grid-cols-3 gap-4">
                            {/* City Name */}
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

                            {/* City Code */}
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
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute bottom-4 right-4 flex space-x-4">
                            <button 
                                type="button" 
                                onClick={handleCancel} 
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

export default EditCityPage;
