import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ApplicationLogo from './../components/ApplicationLogo';

export default function GuestLayout() {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link to="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <Outlet />
            </div>
        </div>
    );
}
