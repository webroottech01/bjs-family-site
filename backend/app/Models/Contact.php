<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'company_name',
        'phone_no',
        'email',
        'zipcode',
        'service',
        'product',
        'weekly_volume'
    ];
}
