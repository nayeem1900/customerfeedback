import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
const Feedback = () => {
    const { auth } = usePage().props;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        satisfaction: "",
        easeOfUse: "",
        performance: "",
        usabilityIssues: "",
        missingFeatures: "",
        performanceIssues: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data: ", formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-[80vh] bg-gray-100 p-5 flex items-center justify-center">
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg w-full max-w-7xl">
                {/* Customer Details */}
                <h1 className="text-2xl bg-sky-200 p-1 font-bold text-sky-800 mb-6 uppercase text-center">
                    Customer Feedback Form
                </h1>
                <form onSubmit={handleSubmit} className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-xl">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={auth.user.name}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={auth.user.email}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={auth.user.phone}
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                    </div>

                    {/* Feedback Questions */}
                    <h2 className="text-2xl font-bold text-sky-900 my-5 mb-4">
                        Please rate the following aspects:
                    </h2>
                    <table className="table-auto w-full mb-6 text-lg">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2"></th>
                                <th className="py-2 px-2">Very Good</th>
                                <th className="py-2 px-2">Good</th>
                                <th className="py-2 px-2">Fair</th>
                                <th className="py-2 px-2">Poor</th>
                                <th className="py-2 px-2">Very Poor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    name: "satisfaction",
                                    label: "Rate your overall satisfaction with the product",
                                },
                                { name: "easeOfUse", label: "How easy was it to use the product?" },
                                { name: "performance", label: "How would you rate the performance?" },
                            ].map((question) => (
                                <tr key={question.name}>
                                    <td className="py-2 px-2 font-bold">{question.label}</td>
                                    {["Very Good", "Good", "Fair", "Poor", "Very Poor"].map(
                                        (option, index) => (
                                            <td key={index} className="text-center">
                                                <input
                                                    type="radio"
                                                    name={question.name}
                                                    value={option}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Yes/No Questions */}
                    <div className="space-y-6 p-2">
                        {[
                            {
                                name: "usabilityIssues",
                                label: "Did you encounter any usability issues?",
                            },
                            {
                                name: "missingFeatures",
                                label: "Were there any missing features that you expected?",
                            },
                            {
                                name: "performanceIssues",
                                label: "Did you experience any performance issues?",
                            },
                        ].map((question) => (
                            <div key={question.name} className="w-7/12 flex items-center justify-between text-lg">
                                <label className="block font-bold">
                                    {question.label}
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            value="Yes"
                                            onChange={handleChange}
                                            required
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            value="No"
                                            onChange={handleChange}
                                            required
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            className="bg-sky-950 text-white py-2 px-6 rounded-lg font-medium hover:bg-sky-900 transition"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ); F
};

export default Feedback;
