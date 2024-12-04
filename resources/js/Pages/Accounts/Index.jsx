import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Index = ({ accounts }) => {
    // Organizar las cuentas por categoría
    const categories = accounts.reduce((acc, account) => {
        const categoryName = account.category.name;
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(account);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Accounts</h1>
                <div className="flex justify-end mb-4">
                    <InertiaLink href="/accounts/create" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Create Account
                    </InertiaLink>
                </div>
                <div className="space-y-6">
                    {Object.keys(categories).map(categoryName => (
                        <div key={categoryName}>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{categoryName}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categories[categoryName].map(account => (
                                    <div key={account.id} className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{account.name}</h3>
                                        <p className="text-gray-600">Username: {account.username}</p>
                                        <InertiaLink href={`/accounts/${account.id}`} className="text-blue-500 hover:underline">
                                            View Details
                                        </InertiaLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;