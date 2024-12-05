import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, accounts }) {
    const [showAccountList, setShowAccountList] = useState(true);
    const [showQuickLinks, setShowQuickLinks] = useState(true);

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold leading-tight text-indigo-600">
                        Dashboard
                    </h2>
                    <div className="flex space-x-4">
                        <Link href="/categories" className="text-indigo-600 hover:underline">
                            Manage Categories
                        </Link>
                        <Link href="/notifications" className="text-indigo-600 hover:underline">
                            View Notifications
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-indigo-100">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {auth && auth.user ? (
                                <>
                                    <h3 className="text-3xl font-bold mb-4 text-indigo-600">Welcome, {auth.user.name}!</h3>
                                    <p className="text-lg mb-8 text-gray-600">Manage your passwords and sensitive information securely.</p>

                                    <div className="mt-8">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="text-2xl font-semibold text-indigo-600">Your Accounts</h4>
                                            <button
                                                className="text-gray-600 hover:text-gray-900 transition duration-300"
                                                onClick={() => setShowAccountList(!showAccountList)}
                                            >
                                                {showAccountList ? 'Hide' : 'Show'}
                                            </button>
                                        </div>
                                        {showAccountList && (
                                            <ul className="mt-4 space-y-2">
                                                {accounts.map(account => (
                                                    <li key={account.id} className="bg-indigo-50 p-4 rounded shadow-sm hover:bg-indigo-100">
                                                        <Link href={`/accounts/${account.id}`} className="text-indigo-600 hover:underline">
                                                            {account.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <Link href="/accounts/create" className="mt-4 inline-block text-indigo-600 hover:underline">
                                            Add New Account
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-600 text-white p-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Started with our Password Manager</h2>
                <p className="text-lg mb-8">Securely store and manage your passwords with our easy-to-use password manager.</p>
                <Link href="/accounts/create" className="inline-block text-white hover:underline bg-indigo-800 py-2 px-4 rounded">
                    Get Started
                </Link>
            </div>
        </AuthenticatedLayout>
    );
}
