import React, { useState } from 'react';
import GiftForm from './components/GiftForm';
import Login from './components/Login';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-6">CryptoGift</h1>
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                {isAuthenticated ? (
                    <>
                        <GiftForm />
                        <button
                            onClick={handleLogout}
                            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Login onLogin={handleLogin} />
                )}
            </div>
        </div>
    );
};

export default App;
