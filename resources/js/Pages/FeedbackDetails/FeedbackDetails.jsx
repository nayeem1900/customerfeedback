import React from "react";
import { Link } from "@inertiajs/react";

const FeedbackDetails = ({ feedbacks }) => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Feedback Details
            </h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-sky-500 text-white">
                            <th className="border border-gray-300 px-4 py-2">
                                ID
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Customer Id
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Customer Name
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Email
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Phone
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Question
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Feedback
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.data.map((feedback) => (
                            <tr
                                key={feedback.id}
                                className="hover:bg-gray-100 text-center"
                            >
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {feedback.id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {feedback.customer_id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {feedback.customer.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {feedback.customer.email}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {feedback.customer.phone}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {feedback.question.question_text}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {feedback.answer}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-left items-center mt-4 space-x-2">
                {feedbacks.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`px-3 py-1 border rounded ${
                            link.active ? "bg-sky-500 text-white" : "bg-white"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeedbackDetails;
