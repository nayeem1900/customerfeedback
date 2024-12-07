import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { route } from "ziggy-js";

const Register = () => {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <div className="flex w-full h-screen">
            {/* Left Section */}
            <div className="w-1/2 bg-sky-200 flex justify-center items-center">
                <img
                    src="/images/login.png"
                    alt="Login"
                    className="w-4/5 h-auto"
                />
            </div>

            {/* Right Section */}
            <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
                <div className="w-3/5 mt-60">
                    <div className="flex justify-center mb-6">
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="w-48 h-auto"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                        Sign Up
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Create your account by filling in the information below.
                    </p>
                    <form onSubmit={submit}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            {errors.name && (
                                <div className="text-red-500">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        {/* Email Field */}
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
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            {errors.email && (
                                <div className="text-red-500">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            {errors.phone && (
                                <div className="text-red-500">
                                    {errors.phone}
                                </div>
                            )}
                        </div>

                        {/* Password Field */}
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
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            {errors.password && (
                                <div className="text-red-500">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        {/* Confirm Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            {errors.password_confirmation && (
                                <div className="text-red-500">
                                    {errors.password_confirmation}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 text-white bg-sky-950 rounded-lg hover:bg-sky-900"
                        >
                            Register
                        </button>
                    </form>
                </div>
                <p className="my-3">
                    All ready have an account{" "}
                    <Link
                        href="/login"
                        className="text-sky-900 cursor-pointer font-bold"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
