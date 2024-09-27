import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import GiftForm from './components/GiftForm';
import Login from './components/Login';
import Header from './components/Header';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate('/gift-form'); // Redirect to gift form after login
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/'); // Redirect to login after logout
    };

    const PrivateRoute = ({ element }) => {
        return isAuthenticated ? element : <Navigate to="/" />;
    };

    return (
        <>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <Routes>
                        <Route path="/" element={<Login onLogin={handleLogin} />} />
                        <Route path="/gift-form" element={<PrivateRoute element={<GiftForm />} />} />
                    </Routes>
                </div>
            </main>
        </>
    );
};

export default App;
