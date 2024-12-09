<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $totalCustomers = User::where('role', 'customer')->count();
        $totalQuestions = Question::count();
        return inertia('Dashboard/Dashboard', compact('totalCustomers', 'totalQuestions'));
    }
}
