import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Index = ({ accounts }) => {
    return (
        <div>
            <h1>Accounts</h1>
            <InertiaLink href="/accounts/create">Create Account</InertiaLink>
            <ul>
                {accounts.map(account => (
                    <li key={account.id}>
                        {account.name} - {account.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;