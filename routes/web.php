<?php

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

Route::get('/create_survey', function () {
    return inertia('Survey/CreateSurvey');
});

