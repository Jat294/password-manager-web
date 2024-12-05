import React from 'react';
import { Head, Link } from '@inertiajs/react';

const Show = ({ account }) => {
    if (!account) {
        return <div>Loading...</div>;
    }

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(account.encrypted_password).then(() => {
            alert('Password copied to clipboard');
        }).catch(err => {
            alert('Failed to copy password');
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Head title={`Account: ${account.name}`} />
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Account Details</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{account.name}</h2>
                    <p className="text-gray-600">Username: {account.username}</p>
                    <p className="text-gray-600">Category: {account.category ? account.category.name : 'No category'}</p>
                    <p className="text-gray-600">Password: {account.encrypted_password}</p>
                    <button
                        onClick={handleCopyPassword}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Copy Password
                    </button>
                    <Link href="/accounts" className="text-blue-500 mt-4 inline-block">
                        Back to Accounts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Show;