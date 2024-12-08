<?php

use App\Http\Controllers\AdminFeedbackController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', function () {
    return inertia('Home');
});


Route::middleware('auth')->group(function () {
    Route::get('/feedback', function () {
        return inertia('Feedback/Feedback');
    });
    Route::get('/dashboard', function () {
        return inertia('Dashboard/Dashboard');
    });
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    Route::get('/profile/view', [ProfileController::class, 'userProfile'])->name('profile.show');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
});

Route::resource('/questions', QuestionController::class);
Route::get('/feedback/details', [AdminFeedbackController::class, 'feedbackDetails']);
Route::get('/feedback/result', [AdminFeedbackController::class, 'feedbackResult']);

