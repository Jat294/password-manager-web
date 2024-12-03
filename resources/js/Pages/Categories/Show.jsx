//Show en react para mostrar la categoria con estilos de tailwindcss
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Show = ({ category }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Category: {category.name}</h1>
            <InertiaLink href="/categories" className="text-blue-500">Back</InertiaLink>
        </div>
    );
};


