import React, { useState } from 'react';
import GiftForm from './components/GiftForm';
import Login from './components/Login';
import Header from './components/Header';

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
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    {isAuthenticated ? (
                        <GiftForm />
                    ) : (
                        <Login onLogin={handleLogin} />
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;
