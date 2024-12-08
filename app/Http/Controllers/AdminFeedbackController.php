<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminFeedbackController extends Controller
{
    public function feedbackDetails(){
        return inertia('FeedbackDetails/FeedbackDetails');
    }
    public function feedbackResult(){
        return inertia('FeedbackResult/FeedbackResult');
    }
}
