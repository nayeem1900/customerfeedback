import { Link } from '@inertiajs/react';
import React from 'react';

const Layout = ({ children, auth }) => {
    const handleLogout = (e) => {
        e.preventDefault();
        fetch('/logout', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                'Content-Type': 'application/json',
            },
        }).then(() => {
            window.location.href = '/login';
        });
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-sky-950 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/" className="text-2xl font-bold">
                                MyApp
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-6">
                            {auth.user ? (
                                // Authenticated User
                                <>
                                    <Link
                                        href="/"
                                        className="hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/feedback"
                                        className="hover:bg-sky-900 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Give Feedback
                                    </Link>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button">
                                            <div className="w-8 h-8 rounded-full bg-slate-500 text-white font-bold text-sm flex flex-col items-center justify-center">
                                                {auth.user.name.slice(0, 2).toUpperCase()}
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-200 text-gray-600 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                                            <li><Link href='/profile/view'>Profile</Link></li>
                                            <li>
                                                <button
                                                    onClick={handleLogout}
                                                    className="px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                className="text-white hover:bg-blue-600 p-2 rounded-md focus:outline-none"
                                aria-label="Open menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="">
                {children}
            </main>
        </div>
    );
};

export default Layout;
