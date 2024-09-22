import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Get the navigate function

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Navigate to the home page
        navigate('/home');
    };

    const handleForgotPassword = () => {
        if (!email) {
            alert('Please enter your email to receive the reset link.');
        } else {
            alert(`Reset link sent to ${email}`);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded border border-gray-300 p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="text-blue-500 hover:text-blue-700 text-sm mt-4"
                        onClick={handleForgotPassword}
                    >
                        Forgot Password?
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
