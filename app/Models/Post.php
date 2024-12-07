<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_post_id',
        'slug',
        'title',
        'image',
        'content',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function categoryPost()
    {
        return $this->belongsTo(CategoryPost::class);
    }
}
