<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    protected $fillable = [
        'start_time',
        'end_time',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
