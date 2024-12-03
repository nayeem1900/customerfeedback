<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return inertia('Home');
    });
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');
});


