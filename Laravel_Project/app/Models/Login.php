<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    protected $table = "Login";
    protected $hidden = ["Photo"];
}
