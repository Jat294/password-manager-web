import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ auth, header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <header>
                <div className="container mx-auto flex justify-between items-center py-6">
                    <div>
                        <Link href="/" className="text-lg font-semibold text-gray-900">
                            Home
                        </Link>
                    </div>
                    <div>
                        {auth && auth.user ? (
                            <span className="text-gray-900">Hello, {auth.user.name}</span>
                        ) : (
                            <Link href="/login" className="text-gray-900">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </header>
            <main>
                {header}
                {children}
            </main>
        </div>
    );
}
