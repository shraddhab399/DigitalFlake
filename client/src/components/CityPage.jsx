import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CityContext } from '../contexts/CityContext'; // Import context

const CityPage = () => {
    const { cities, deleteCity } = useContext(CityContext); // Get context data for cities
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-city/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this city?')) {
            deleteCity(id);
        }
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

                <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 w-3/4 m-2">
                    <div className="flex items-center justify-between mb-4 w-full px-4">
                        <Link to="/city" className="flex items-center text-black-500 transition duration-300">
                            <FontAwesomeIcon icon={faCity} className="mr-2" /> City
                        </Link>
                        <input type="text" placeholder="Search City..." className="border border-gray-400 rounded px-4 py-2" />
                        <button
                            onClick={() => navigate('/add-city')}
                            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700 transition duration-300"
                        >
                            Add City
                        </button>
                    </div>

                    <table className="table-auto border-collapse w-full text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2">City Name</th>
                                <th className="border px-4 py-2">City Code</th>
                                <th className="border px-4 py-2">State</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cities.map((city) => (
                                <tr key={city.id} className="bg-yellow-100 mb-4">
                                    <td className="border px-4 py-2">{city.id}</td>
                                    <td className="border px-4 py-2">{city.name}</td>
                                    <td className="border px-4 py-2">{city.code}</td>
                                    <td className="border px-4 py-2">{city.state}</td>
                                    <td className="border px-4 py-2">
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="text-black-500 cursor-pointer mr-4"
                                            onClick={() => handleEdit(city.id)}
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            className="text-black-500 cursor-pointer"
                                            onClick={() => handleDelete(city.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CityPage;
