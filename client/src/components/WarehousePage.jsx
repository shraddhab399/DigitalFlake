import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { WarehouseContext } from '../contexts/WarehouseContext'; // Import context

const WarehousePage = () => {
    const { warehouses, deleteWarehouse } = useContext(WarehouseContext); // Get context data
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-warehouse/${id}`); // Navigate to EditWarehousePage with the warehouse ID
    };
    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this warehouse?");
        if (confirmed) {
            deleteWarehouse(id); // Delete the warehouse if confirmed
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex h-screen w-full">
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
                    <div className="flex flex-col items-center h-screen w-full">
                        <div className="flex items-center mb-4 justify-between w-full px-4">
                            <Link to="/warehouse" className="flex items-center text-black-500 transition duration-300">
                                <FontAwesomeIcon icon={faBuilding} className="mr-2" /> Warehouse
                            </Link>

                            <input type="text" placeholder="Search Warehouse..." className="border border-gray-400 rounded px-4 py-2" />
                            <button 
                                onClick={() => navigate('/add-warehouse')}
                                className="bg-violet-950  text-white rounded px-4 py-2  ">
                                Add Warehouse
                            </button>
                        </div>

                        <table className="table-auto border-collapse w-full text-left" style={{ borderSpacing: '0 10px' }}>
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">ID</th>
                                    <th className="border px-4 py-2">Warehouse Name</th>
                                    <th className="border px-4 py-2">State Name</th>
                                    <th className="border px-4 py-2">State Code</th>
                                    <th className="border px-4 py-2">Status</th>
                                    <th className="border px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {warehouses.map((warehouse) => (
                                    <tr key={warehouse.id} className="bg-yellow-100 mb-4">
                                        <td className="border px-4 py-2">{warehouse.id}</td>
                                        <td className="border px-4 py-2">{warehouse.name}</td>
                                        <td className="border px-4 py-2">{warehouse.stateName}</td>
                                        <td className="border px-4 py-2">{warehouse.stateCode}</td>
                                        <td className="border px-4 py-2">{warehouse.status}</td>
                                        <td className="border px-4 py-2">
                                            <FontAwesomeIcon 
                                                icon={faEdit} 
                                                className="text-black-100 cursor-pointer mr-4" 
                                                onClick={() => handleEdit(warehouse.id)} 
                                            />
                                            <FontAwesomeIcon 
                                                icon={faTrashAlt} 
                                                className="text-black-100 cursor-pointer " 
                                                onClick={() => handleDelete(warehouse.id)} 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarehousePage;
