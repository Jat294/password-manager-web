import React from 'react';

const categories = [
    { id: 1, name: 'Social Media', description: 'All your social media accounts' },
    { id: 2, name: 'Work', description: 'Work-related accounts and passwords' },
    { id: 3, name: 'Personal', description: 'Personal accounts and passwords' },
];

const Show = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{category.name}</h2>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Show;