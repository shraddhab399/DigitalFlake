// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/horizontakLogo.png'; // Adjust the file name

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            navigate('/'); // Redirect to the login page
        }
    };

    return (
        <nav className="bg-violet-950 text-white p-4 flex justify-between items-center"> 
       
            <img src={logo} alt="Logo" className="h-8 w-auto" /> {/* Add your logo */}
         
            <div>
                <button onClick={handleLogout} className="text-white hover:text-gray-400">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
