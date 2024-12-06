import React from 'react'
import Layout from '../../Layout/Layout';
import { usePage } from '@inertiajs/react';

const ProfileView = () => {
    const { auth } = usePage().props;
  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg max-w-lg w-full p-6">

        <div class="flex flex-col items-center">
            <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                class="w-24 h-24 rounded-full shadow-md border-2 border-gray-300"
            />
            <h2 class="text-xl font-semibold mt-4">{auth.user.name}</h2>
        </div>


        <div class="border-t border-gray-200 my-4"></div>


        <div class="space-y-2">
            <p class="flex items-center">
                <span class="font-semibold w-24">Email:</span>
                <span class="text-gray-700">{auth.user.email}</span>
            </p>
            <p class="flex items-center">
                <span class="font-semibold w-24">Contact:</span>
                <span class="text-gray-700">{auth.user.phone}</span>
            </p>
        </div>


        <div class="mt-6 text-center">
            <button
                class="px-6 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
            >
                Change Password
            </button>
        </div>
    </div>
</div>

  )
}


export default ProfileView
