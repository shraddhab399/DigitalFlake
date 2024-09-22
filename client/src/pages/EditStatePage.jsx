import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { StateContext } from '../contexts/StateContext'; // Import StateContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link } from 'react-router-dom';

const EditStatePage = () => {
    const { id } = useParams(); // Get state ID from URL parameters
    const { states, editState } = useContext(StateContext); // Get context data from StateContext

    const [stateName, setStateName] = useState('');
    const [stateCode, setStateCode] = useState('');

    const navigate = useNavigate();

    // Load the state data when the component mounts
    useEffect(() => {
        const stateToEdit = states.find((state) => state.id === parseInt(id));
        if (stateToEdit) {
            setStateName(stateToEdit.name);
            setStateCode(stateToEdit.code);
        }
    }, [id, states]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedState = {
            id: parseInt(id), // Keep the same ID
            name: stateName,
            code: stateCode,
        };

        editState(updatedState); // Use editState to update the state
        navigate('/state'); // Redirect to the state list page
    };

    const handleCancel = () => {
        navigate('/state'); // Redirect to state page
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
                    <h1 className="text-2xl font-bold mb-6">Edit State</h1>

                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {/* State Name */}
                            <div>
                                <label className="block text-gray-700">State Name</label>
                                <input 
                                    type="text" 
                                    value={stateName} 
                                    onChange={(e) => setStateName(e.target.value)} 
                                    className="border border-gray-400 rounded px-4 py-2 w-full" 
                                    placeholder="Enter state name"
                                />
                            </div>

                            {/* State Code */}
                            <div>
                                <label className="block text-gray-700">State Code</label>
                                <input 
                                    type="text" 
                                    value={stateCode} 
                                    onChange={(e) => setStateCode(e.target.value)} 
                                    className="border border-gray-400 rounded px-4 py-2 w-full" 
                                    placeholder="Enter state code"
                                />
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

export default EditStatePage;
