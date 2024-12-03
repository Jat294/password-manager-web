import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ account }) => {
    const [name, setName] = useState(account.name);
    const [username, setUsername] = useState(account.username);
    const [encryptedPassword, setEncryptedPassword] = useState(account.encrypted_password);
    const [categoryId, setCategoryId] = useState(account.category_id);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/accounts/${account.id}`, {
            name,
            username,
            encrypted_password: encryptedPassword,
            category_id: categoryId,
        });
    };

    return (
        <div>
            <h1>Edit Account</h1>
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;