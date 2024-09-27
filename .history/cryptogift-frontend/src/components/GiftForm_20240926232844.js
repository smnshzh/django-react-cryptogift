import React, { useState } from 'react';
import axios from 'axios';
import '../styles/GiftForm.css';  // Import the Gift Form CSS


const GiftForm = () => {
    const [amount, setAmount] = useState('');
    const [recipientWallet, setRecipientWallet] = useState('');
    const [cryptocurrency, setCryptocurrency] = useState('Bitcoin');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const giftData = { amount, recipient_wallet: recipientWallet, cryptocurrency };
        await axios.post('http://localhost:8000/api/gifts/', giftData);
        alert('Gift sent!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
            <input type="text" value={recipientWallet} onChange={(e) => setRecipientWallet(e.target.value)} placeholder="Recipient Wallet" required />
            <select onChange={(e) => setCryptocurrency(e.target.value)}>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Litecoin">Litecoin</option>
            </select>
            <button type="submit">Send Gift</button>
        </form>
    );
};

export default GiftForm;
