import React, { useState } from 'react';
import axios from 'axios';

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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Send Cryptocurrency Gift</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="recipientWallet">Recipient Wallet</label>
                <input
                    type="text"
                    id="recipientWallet"
                    value={recipientWallet}
                    onChange={(e) => setRecipientWallet(e.target.value)}
                    placeholder="Recipient Wallet"
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="cryptocurrency">Cryptocurrency</label>
                <select
                    id="cryptocurrency"
                    value={cryptocurrency}
                    onChange={(e) => setCryptocurrency(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                >
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Ethereum">Ethereum</option>
                    <option value="Litecoin">Litecoin</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
            >
                Send Gift
            </button>
        </form>
    );
};

export default GiftForm;
