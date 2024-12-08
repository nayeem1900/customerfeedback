import React from 'react'

const FeedbackResult = () => {
    return (
        <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold mb-6 text-gray-800">Feedback Results</h1>

            <div class="mb-8 p-6 bg-gray-200 rounded-lg shadow">
                <h2 class="text-lg font-semibold text-gray-700 mb-4">
                    How satisfied are you with our product?
                </h2>
                <div class="grid grid-cols-5 gap-4">
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Very Good</p>
                        <p class="text-xl font-bold text-green-500">40%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Good</p>
                        <p class="text-xl font-bold text-blue-500">30%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Fair</p>
                        <p class="text-xl font-bold text-yellow-500">20%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Poor</p>
                        <p class="text-xl font-bold text-orange-500">8%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Very Poor</p>
                        <p class="text-xl font-bold text-red-500">2%</p>
                    </div>
                </div>
            </div>

            <div class="mb-8 p-6 bg-gray-200 rounded-lg shadow">
                <h2 class="text-lg font-semibold text-gray-700 mb-4">
                    How easy was it to use the product?
                </h2>
                <div class="grid grid-cols-5 gap-4">
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Very Good</p>
                        <p class="text-xl font-bold text-green-500">50%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Good</p>
                        <p class="text-xl font-bold text-blue-500">25%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Fair</p>
                        <p class="text-xl font-bold text-yellow-500">15%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Poor</p>
                        <p class="text-xl font-bold text-orange-500">8%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Very Poor</p>
                        <p class="text-xl font-bold text-red-500">2%</p>
                    </div>
                </div>
            </div>
            <div class="mb-8 p-6 bg-gray-200 rounded-lg shadow">
                <h2 class="text-lg font-semibold text-gray-700 mb-4">
                    How would you rate the performance of the product?
                </h2>
                <div class="grid grid-cols-5 gap-4">
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Very Good</p>
                        <p class="text-xl font-bold text-green-500">45%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Good</p>
                        <p class="text-xl font-bold text-blue-500">35%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Fair</p>
                        <p class="text-xl font-bold text-yellow-500">10%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Poor</p>
                        <p class="text-xl font-bold text-orange-500">5%</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-600">Very Poor</p>
                        <p class="text-xl font-bold text-red-500">5%</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default FeedbackResult
