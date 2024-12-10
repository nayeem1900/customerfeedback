import React from "react";

const FeedbackResult = ({ feedbackResults }) => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Feedback Results
            </h1>

            {feedbackResults.map((result, index) => (
                <div
                    key={index}
                    className="mb-8 p-6 bg-gray-200 rounded-lg shadow"
                >
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        {result.question}
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                        {Object.entries(result.ratings).map(
                            ([rating, percentage]) => (
                                <div key={rating} className="text-center">
                                    <p className="text-sm text-gray-600">
                                        {rating}
                                    </p>
                                    <p
                                        className={`text-xl font-bold ${
                                            percentage >= 40
                                                ? "text-green-500"
                                                : percentage >= 20
                                                ? "text-blue-500"
                                                : percentage >= 10
                                                ? "text-yellow-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {percentage}%
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeedbackResult;
