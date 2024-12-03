import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [encryptedPassword, setEncryptedPassword] = useState('');
    const [categoryId, setCategoryId] = useState('');

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
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Encrypted Password</label>
                    <input type="text" value={encryptedPassword} onChange={(e) => setEncryptedPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Category ID</label>
                    <input type="text" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;