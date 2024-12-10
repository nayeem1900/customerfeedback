<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $totalCustomers = User::where('role', 'customer')->count();
        $totalQuestions = Question::count();

        $totalCustomerFromFeedback = Feedback::groupBy('customer_id')->get()->map(function ($feedback) {
            return $feedback->count();
        });
        return inertia('Dashboard/Dashboard', compact('totalCustomers', 'totalQuestions', 'totalCustomerFromFeedback'));
    }
}
