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
        <div className="app-container">
            <h1>CryptoGift</h1>
            {isAuthenticated ? (
                <>
                    <GiftForm />
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
