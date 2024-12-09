<?php

namespace Database\Seeders;

use App\Models\Question;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        for ($i = 0; $i < 50; $i++) {
            Question::create([
                'question_text' => fake()->sentence(),
            ]);
        }

        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'phone' => '1234567890',
            'role' => 'admin',
            'password' => Hash::make('password'),
        ]);

        for ($i = 0; $i < 70; $i++) {
            User::create([
                'name' => fake()->name(),
                'email' => fake()->email(),
                'phone' => fake()->phoneNumber(),
                'role' => 'customer',
                'password' => Hash::make('password'),
            ]);
        }
    }
}
