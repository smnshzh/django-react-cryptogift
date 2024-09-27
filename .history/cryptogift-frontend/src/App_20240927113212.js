import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
        <BrowserRouter>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <Routes>
                        <Route path="/" element={<Login onLogin={handleLogin} />} />
                        <Route path="/gift-form" element={isAuthenticated ? <GiftForm /> : <Login onLogin={handleLogin} />} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    );
};

export default App;