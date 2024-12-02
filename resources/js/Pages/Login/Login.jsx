import { Link } from '@inertiajs/react';
import React from 'react';

const Login = () => {
  return (
    <div className="flex w-full h-screen ">
      {/* Left Section */}
      <div className="w-1/2 bg-sky-200 flex justify-center items-center">
        <img src="/images/login.png" alt="Login" className="w-4/5 h-auto" />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
        <div className="md:w-3/5">
          <div className="flex justify-center mb-6">
            <img src="/images/logo.png" alt="Logo" className="w-48 h-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign In</h2>
          <p className="text-gray-500 mb-6">
            Enter your email and password for signing in. Thanks
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-sky-950 rounded-lg hover:bg-sky-900"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className='my-3'>If you have no account please <Link href="/register" className='text-sky-900 cursor-pointer font-bold'>Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;

