<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $guarded = [];
    public function feedbacks()
    {
        return $this->hasMany(Feedback::class, 'question_id', 'id');
    }
}
