// src/components/StatePage.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { StateContext } from '../contexts/StateContext'; // Import context for states

const StatePage = () => {
    const { states, deleteState } = useContext(StateContext); // Get context data for states
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-state/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this state?')) {
            deleteState(id);
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
                        <Link to="/state" className="flex items-center text-black-500 transition duration-300">
                            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" /> State
                        </Link>
                        <input type="text" placeholder="Search State..." className="border border-gray-400 rounded px-4 py-2" />
                        <button
                            onClick={() => navigate('/add-state')}
                            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700 transition duration-300"
                        >
                            Add State
                        </button>
                    </div>

                    <table className="table-auto border-collapse w-full text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2">State Name</th>
                                <th className="border px-4 py-2">State Code</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {states.map((state) => (
                                <tr key={state.id} className="bg-yellow-100 mb-4">
                                    <td className="border px-4 py-2">{state.id}</td>
                                    <td className="border px-4 py-2">{state.name}</td>
                                    <td className="border px-4 py-2">{state.code}</td>
                                    <td className="border px-4 py-2">
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="text-black-100 cursor-pointer hover:text-yellow-700 mr-4"
                                            onClick={() => handleEdit(state.id)}
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            className="text-black-100 cursor-pointer hover:text-red-700"
                                            onClick={() => handleDelete(state.id)}
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

export default StatePage;
