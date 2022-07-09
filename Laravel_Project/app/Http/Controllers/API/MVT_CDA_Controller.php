<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MVT_CDA;
use App\Models\MVT_CDA_OneLine;

// use Illuminate\Http\Request;

class MVT_CDA_Controller extends Controller
{
    public function MVT_CDA()
    {
        $data = MVT_CDA::all();
        return (response()->json([
            'status' => 301,
            'table' => $data
        ]));
    }
    public function MVT_CDA_OneLine()
    {
        $data = MVT_CDA_OneLine::all();
        return (response()->json([
            'status' => 302,
            'table' => $data
        ]));
    }
}
