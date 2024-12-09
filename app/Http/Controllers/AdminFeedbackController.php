<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminFeedbackController extends Controller
{
    public function feedbackDetails()
    {
        $feedbacks = Feedback::with('customer', 'question')
            ->paginate(5); // Paginate with 10 results per page

        $feedbacks->getCollection()->transform(function ($feedback) {
            return [
                'id' => $feedback->id,
                'customer_id' => $feedback->customer_id,
                'customer_name' => $feedback->customer->name ?? null,
                'email' => $feedback->customer->email ?? null,
                'phone' => $feedback->customer->phone ?? null,
                'question_text' => $feedback->question->question_text ?? null,
                'answer' => $feedback->answer,
            ];
        });

        return Inertia::render('FeedbackDetails/FeedbackDetails', compact('feedbacks'));
    }

    public function feedbackResult()
    {
        // Define all possible rating options
        $allOptions = ['Very Good', 'Good', 'Fair', 'Poor', 'Very Poor'];

        $results = Feedback::with('question')
            ->get()
            ->groupBy('question.question_text')
            ->map(function ($feedbacks, $question) use ($allOptions) {
                $total = $feedbacks->count();

                // Calculate percentages for available options
                $ratings = $feedbacks->groupBy('answer')->map(function ($group) use ($total) {
                    return round(($group->count() / $total) * 100);
                });

                // Ensure all options are present with 0% if missing
                $normalizedRatings = collect($allOptions)->mapWithKeys(function ($option) use ($ratings) {
                    return [$option => $ratings->get($option, 0)];
                });

                return [
                    'question' => $question,
                    'ratings' => $normalizedRatings->toArray(),
                ];
            })
            ->values();

        return Inertia::render('FeedbackResult/FeedbackResult', ['feedbackResults' => $results]);
    }


}
