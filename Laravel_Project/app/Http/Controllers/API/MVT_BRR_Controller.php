<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MVT_BRR;
use App\Models\MVT_BRR_OneLine;

// use Illuminate\Http\Request;

class MVT_BRR_Controller extends Controller
{
    public function MVT_BRR()
    {
        $data = MVT_BRR::all();
        return (response()->json([
            'status' => 101,
            'table' => $data
        ]));
    }
    public function MVT_BRR_OneLine()
    {
        $data = MVT_BRR_OneLine::all();
        return (response()->json([
            'status' => 102,
            'table' => $data
        ]));
    }
}
