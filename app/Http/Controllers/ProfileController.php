<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class ProfileController extends Controller
{
    public function userProfile()
    {
        $user = auth()->user();

        return inertia('Profile/ProfileView');
    }

    public function edit()
    {
        $user = auth()->user();

        return Inertia::render('Profile', [
            'user' => $user,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:15',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = auth()->user();
        $user->update($validated);

        if ($request->hasFile('photo')) {
            $user->update([
                'photo' => $request->file('photo')->store('profile_photos', 'public'),
            ]);
        }

        return back()->with('success', 'Profile updated successfully!');
    }
}
