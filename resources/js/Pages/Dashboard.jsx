import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, accounts }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-gray-100">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {auth && auth.user ? (
                                <>
                                    <h3 className="text-3xl font-bold mb-4">Welcome, {auth.user.name}!</h3>
                                    <p className="text-lg mb-8">Manage your passwords and sensitive information securely.</p>

                                    <div className="mt-8">
                                        <h4 className="text-2xl font-semibold mb-4">Your Accounts</h4>
                                        <ul className="mt-4 space-y-2">
                                            {accounts.map(account => (
                                                <li key={account.id} className="bg-gray-50 p-4 rounded shadow-sm hover:bg-gray-100">
                                                    <Link href={`/accounts/${account.id}`} className="text-blue-600 hover:underline">
                                                        {account.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/accounts/create" className="mt-4 inline-block text-blue-600 hover:underline">
                                            Add New Account
                                        </Link>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
                                        <ul className="mt-4 space-y-2">
                                            <li>
                                                <Link href="/categories" className="text-blue-600 hover:underline">
                                                    Manage Categories
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/sessions" className="text-blue-600 hover:underline">
                                                    View Sessions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/notifications" className="text-blue-600 hover:underline">
                                                    View Notifications
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
