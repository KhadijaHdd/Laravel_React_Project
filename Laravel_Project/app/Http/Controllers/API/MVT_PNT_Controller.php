<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MVT_PNT;
use App\Models\MVT_PNT_OneLine;
use Illuminate\Http\Request;

class MVT_PNT_Controller extends Controller
{
    public function MVT_PNT()
    {
        $data = MVT_PNT::all();
        return (response()->json([
            'status' => 401,
            'table' => $data
        ]));
    }
    public function MVT_PNT_OneLine()
    {
        $data = MVT_PNT_OneLine::all();
        return (response()->json([
            'status' => 402,
            'table' => $data
        ]));
    }
}
