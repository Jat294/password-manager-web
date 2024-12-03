import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Show = ({ account }) => {
    return (
        <div>
            <h1>{account.name}</h1>
            <p>Username: {account.username}</p>
            <p>Encrypted Password: {account.encrypted_password}</p>
            <p>Category ID: {account.category_id}</p>
            <InertiaLink href={`/accounts/${account.id}/edit`}>Edit</InertiaLink>
            <form action={`/accounts/${account.id}`} method="POST" style={{ display: 'inline' }}>
                <input type="hidden" name="_method" value="DELETE" />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default Show;