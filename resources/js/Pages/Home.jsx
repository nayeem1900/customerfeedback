import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-sky-900 text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Welcome to Customer Feedback App</h1>
                    <p className="mt-2 text-lg">
                        Your feedback helps us to improve our services.
                    </p>
                    <a
                        href="/feedback"
                        className="mt-4 inline-block bg-white text-blue-600 py-2 px-6 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                        Give Feedback
                    </a>
                </div>
            </header>

            {/* How It Works Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-5 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-3xl uppercase font-bold text-blue-600 mb-2">Step 1</h3>
                            <div className='w-20 h-20 rounded-full bg-sky-900 flex justify-center items-center'>
                                <FaSignInAlt className='text-3xl text-white' /></div>
                            <p className='text-xl'>Sign up or login</p>
                        </div>
                        <div className="space-y-5 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-3xl uppercase font-bold text-blue-600 mb-2">Step 2</h3>
                            <div className='w-20 h-20 rounded-full bg-sky-900 flex justify-center items-center'>
                                <FaPersonCircleQuestion className='text-5xl text-white' /></div>
                            <p className='text-xl'>Answer a few simple questions.</p>
                        </div>
                        <div className="space-y-5 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-3xl uppercase font-bold text-blue-600 mb-2">Step 3</h3>
                            <div className='w-20 h-20 rounded-full bg-sky-900 flex justify-center items-center'>
                                <LuSend className='text-3xl text-white' /></div>
                            <p className='text-xl'>Submit your feedback</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        Why Your Feedback Matters
                    </h2>
                    <div className='w-1/2 bg-sky-200 p-8 mx-auto rounded-tr-[50px] rounded-bl-[50px]'>
                        <ul className="list-disc list-inside space-y-4 text-xl font-bold text-sky-900">
                            <li>Improve our services to serve you better.</li>
                            <li>Have your voice heard and valued.</li>
                            <li>Contribute to creating better experiences for everyone.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 bg-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Need Help or Have Questions?
                    </h2>
                    <p className="mb-4">
                        Reach out to our support team anytime at{" "}
                        <a href="mailto:support@feedback.com" className="text-blue-600">
                            support@feedback.com
                        </a>.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home
