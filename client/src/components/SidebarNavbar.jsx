import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faCity, faHome, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import icons
import logo from '../images/horizontakLogo.png'; // Adjust the file name

const SidebarNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            navigate('/'); // Redirect to the login page
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
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
            <div className="flex flex-col w-3/4">
                <nav className="bg-violet-950 text-white p-4 flex justify-between items-center">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <div>
                        <button onClick={handleLogout} className="text-white hover:text-gray-400">
                            Logout
                        </button>
                    </div>
                </nav>
                <div className="flex flex-col items-center justify-center h-full">
                    {/* The children will be rendered here */}
                </div>
            </div>
        </div>
    );
};

export default SidebarNavbar;
