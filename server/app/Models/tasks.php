<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class tasks extends Model
{
    protected $fillable = [
        'title',
        'description',
        'status',
        'user_id',
        'due_date',
    ];
}
