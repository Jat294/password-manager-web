import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome to Password Manager" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex flex-col items-center justify-center">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <header className="grid grid-cols-1 items-center gap-2 py-10 lg:grid-cols-3">
                        <div className="flex justify-center">
                            <svg
                                className="h-12 w-auto text-blue-500 lg:h-16"
                                viewBox="0 0 62 65"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M31 0C13.879 0 0 13.879 0 31s13.879 31 31 31 31-13.879 31-31S48.121 0 31 0zm0 58C16.561 58 4 45.439 4 31S16.561 4 31 4s27 12.561 27 27-12.561 27-27 27z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M31 15a16 16 0 100 32 16 16 0 000-32zm0 28a12 12 0 110-24 12 12 0 010 24z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="text-center lg:col-span-2">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Welcome to Password Manager
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                Securely manage your passwords and sensitive information.
                            </p>
                        </div>
                    </header>
                    <main className="mt-10">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    About the Project
                                </h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    This Password Manager allows you to securely store and manage your passwords, categorize them, and synchronize across multiple devices. It ensures your data is encrypted and only accessible by you.
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Features
                                </h2>
                                <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                                    <li>Secure password storage</li>
                                    <li>Data encryption</li>
                                    <li>Two-factor authentication</li>
                                    <li>Category management</li>
                                    <li>Synchronization across devices</li>
                                    <li>Notifications and alerts</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            {auth.user ? (
                                <Link href="/dashboard" className="text-blue-500">
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login" className="text-blue-500 mr-4">
                                        Login
                                    </Link>
                                    <Link href="/register" className="text-blue-500">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </main>
                    <footer className="mt-10 text-center text-gray-600 dark:text-gray-300">
                        <p>Laravel v{laravelVersion} (PHP v{phpVersion})</p>
                    </footer>
                </div>
            </div>
        </>
    );
}
