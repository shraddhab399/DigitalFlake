// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import logo from '../images/image 1.png'; // Ensure the correct file name and path
import Navbar from './Navbar';

const HomePage = () => {
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
                <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 w-3/4  m-2">
                <div className="flex flex-col items-center justify-center p-8 ">
                    <img src={logo} alt="Logo" className="h-16 w-auto mb-8 " />
                    <h1 className="text-3xl font-bold">Welcome to digital Flake Admin!</h1>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
