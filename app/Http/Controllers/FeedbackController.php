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


        try {
            foreach ($validated['feedback'] as $questionId => $answer) {
                Feedback::create([
                    'question_id' => $questionId,
                    'customer_id' => $validated['id'],
                    'answer' => $answer,
                ]);
            }
            return inertia('Feedback', [
                'message' => 'Feedback submitted successfully!',
            ]);
        } catch (\Exception $e) {
            // Return error response
            return response()->json(['error' => 'Something went wrong.'], 500);
        }

    }
}
