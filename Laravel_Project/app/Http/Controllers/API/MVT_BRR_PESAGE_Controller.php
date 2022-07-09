<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MVT_BRR_PESAGE;
use App\Models\MVT_BRR_PESAGE_OneLine;
// use Illuminate\Http\Request;

class MVT_BRR_PESAGE_Controller extends Controller
{
    public function MVT_BRR_PESAGE()
    {
        $data = MVT_BRR_PESAGE::all();
        return (response()->json([
            'status' => 201,
            'table' => $data
        ]));
    }
    public function MVT_BRR_PESAGE_OneLine()
    {
        $data = MVT_BRR_PESAGE_OneLine::all();
        return (response()->json([
            'status' => 202,
            'table' => $data
        ]));
    }
}
