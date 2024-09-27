// src/components/Header.js
import React from 'react';

const Header = ({ isAuthenticated, onLogout }) => {
    return (
        <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">CryptoGift</h1>
            {isAuthenticated && (
                <button
                    onClick={onLogout}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
                >
                    Logout
                </button>
            )}
        </header>
    );
};

export default Header;
