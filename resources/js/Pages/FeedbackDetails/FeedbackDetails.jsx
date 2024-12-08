import React from 'react'

const FeedbackDetails = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Feedback Details</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-sky-500 text-white">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">User</th>
                            <th className="border border-gray-300 px-4 py-2">Question</th>
                            <th className="border border-gray-300 px-4 py-2">FeedbackDetails</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                            <td className="border border-gray-300 px-4 py-2">John Doe</td>
                            <td className="border border-gray-300 px-4 py-2">How satisfied are you with our product?</td>
                            <td className="border border-gray-300 px-4 py-2">Very Satisfied</td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2 text-center">2</td>
                            <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
                            <td className="border border-gray-300 px-4 py-2">Did you encounter any issues?</td>
                            <td className="border border-gray-300 px-4 py-2">No</td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                            <td className="border border-gray-300 px-4 py-2">Alex Brown</td>
                            <td className="border border-gray-300 px-4 py-2">Would you recommend us to others?</td>
                            <td className="border border-gray-300 px-4 py-2">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default FeedbackDetails
