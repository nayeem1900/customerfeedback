<?php

use App\Http\Controllers\QuestionController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});
Route::get('/register', function () {
    return inertia('Register/Register');
});
Route::get('/login', function () {
    return inertia('Login/Login');
});

Route::resource('/questions', QuestionController::class);
