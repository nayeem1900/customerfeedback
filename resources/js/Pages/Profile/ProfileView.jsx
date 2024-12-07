import React from 'react'
import Layout from '../../Layout/Layout';
import { usePage } from '@inertiajs/react';

const ProfileView = () => {
    const { auth } = usePage().props;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-6">

        <div className="flex flex-col items-center">
            <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full shadow-md border-2 border-gray-300"
            />
            <h2 className="text-xl font-semibold mt-4">{auth.user.name}</h2>
        </div>


        <div className="border-t border-gray-200 my-4"></div>


        <div className="space-y-2">
            <p className="flex items-center">
                <span className="font-semibold w-24">Email:</span>
                <span className="text-gray-700">{auth.user.email}</span>
            </p>
            <p className="flex items-center">
                <span className="font-semibold w-24">Contact:</span>
                <span className="text-gray-700">{auth.user.phone}</span>
            </p>
        </div>


        <div className="mt-6 text-center">
            <button
                className="px-6 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
            >
                Change Password
            </button>
        </div>
    </div>
</div>

  )
}


export default ProfileView
