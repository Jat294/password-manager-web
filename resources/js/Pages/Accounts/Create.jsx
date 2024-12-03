import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authMethod, setAuthMethod] = useState('email');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/users', {
            name,
            email,
            password,
            auth_method: authMethod,
        });
    };

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Authentication Method</label>
                    <select value={authMethod} onChange={(e) => setAuthMethod(e.target.value)} required>
                        <option value="email">Email</option>
                        <option value="2fa">Two-Factor Authentication</option>
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;