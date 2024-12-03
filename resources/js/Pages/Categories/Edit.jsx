import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ category }) => {
    const [name, setName] = useState(category.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/categories/${category.id}`, {
            name
        });
    };

    return (
        <div>
            <h1>Edit Category</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;