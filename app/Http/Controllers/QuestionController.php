<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use Inertia\Inertia;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $questions = Question::latest()->paginate(10);
        return Inertia::render('Survey/CreateSurvey', compact('questions'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'question_text' => 'required|string|max:50',
        ]);

        Question::create($validate);

        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            'question_text' => 'sometimes|required|string|max:50',
        ]);

        $question = Question::find($id);

        if (!$question) {
            return redirect()->back()->with('error', 'Question not found');
        }

        $question->update($validate);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $question = Question::find($id);

        if (!$question) {
            return redirect()->back()->with('error', 'Question not found');
        }

        $question->delete();

        return redirect()->back()->with('success', 'Question deleted successfully');
    }
}
