import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Feedback = ({ success, error, questions }) => {
    const { auth } = usePage().props;
    const [formData, setFormData] = useState({
        id: auth.user.id || "",
        name: auth.user.name || "",
        email: auth.user.email || "",
        phone: auth.user.phone || "",
        feedback: {},
    });
    useEffect(() => {
        const feedbackState = {};
        questions.forEach((question) => {
            feedbackState[question.id] = ""; // Empty initially
        });
        setFormData((prev) => ({ ...prev, feedback: feedbackState }));
    }, [questions]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (Object.keys(formData.feedback).includes(name)) {
            setFormData((prev) => ({
                ...prev,
                feedback: { ...prev.feedback, [name]: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form data:", formData); // Debugging
        Inertia.post("/feedback", formData, {
            onStart: () => {
                console.log("Form submission started...");
            },
            onFinish: () => {
                console.log("Form submission finished.");
            },
            onSuccess: () => {
                toast.success("Feedback submitted successfully!");
            },
            onError: () => {
                toast.error("Failed to submit feedback. Please try again.");
            },
        });

    };

    return (
        <div className="min-h-[80vh] bg-gray-100 p-5 flex items-center justify-center">
            <div className="bg-sky-100 p-6 rounded-lg shadow-lg w-full max-w-7xl">
                <ToastContainer />
                {success && (
                    <div className="mb-4 p-4 text-green-800 bg-green-200 rounded-lg">
                        {success}
                    </div>
                )}
                {error && (
                    <div className="mb-4 p-4 text-red-800 bg-red-200 rounded-lg">
                        {error}
                    </div>
                )}
                {/* Customer Details */}
                <h1 className="text-2xl bg-sky-200 p-1 font-bold text-sky-800 mb-6 uppercase text-center">
                    Customer Feedback Form
                </h1>
                <form onSubmit={handleSubmit} className="mt-12">
                    <input
                        type="hidden"
                        name="id"
                        value={auth?.user?.id}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                        required
                    />
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
                            {questions.map((question) => (
                                <tr key={question.id}>
                                    <td className="py-2 px-2 font-bold">{question.question_text}</td>
                                    {["Very Good", "Good", "Fair", "Poor", "Very Poor"].map(
                                        (option, index) => (
                                            <td key={index} className="text-center">
                                                <input
                                                    type="radio"
                                                    name={question.id}
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
