import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/react';

const Create = ({ categories = [] }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [encryptedPassword, setEncryptedPassword] = useState('');
    const [categoryId, setCategoryId] = useState(categories.length > 0 ? categories[0].id : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/accounts', {
            name,
            username,
            encrypted_password: encryptedPassword,
            category_id: categoryId,
        });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
            <Head title="Create Account" />
            <h1 className="text-2xl font-bold mb-6">Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Encrypted Password</label>
                    <input
                        type="password"
                        value={encryptedPassword}
                        onChange={(e) => setEncryptedPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Category</label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Create
                </button>
            </form>
            <Link href="/accounts" className="text-blue-500 mt-4 inline-block">
                Back to Accounts
            </Link>
        </div>
    );
};

export default Create;