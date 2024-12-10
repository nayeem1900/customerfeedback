<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Question;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index()
    {
        $questions = Question::all();
        return inertia('Feedback/Feedback', compact('questions'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'feedback' => 'required|array',
            'feedback.*' => 'required|string|in:Very Good,Good,Fair,Poor,Very Poor',
        ]);

        $getCustomerInfo = Feedback::where('customer_id', $validated['id'])->count();
        if ($getCustomerInfo > 0) {
            redirect()->back()->with('error', 'Feedback already submitted');
        } else {
            foreach ($validated['feedback'] as $questionId => $answer) {
                Feedback::create([
                    'question_id' => $questionId,
                    'customer_id' => $validated['id'],
                    'answer' => $answer,
                ]);
            }
            return redirect()->back()->with('success', 'Feedback submitted successfully');
        }
    }
}
