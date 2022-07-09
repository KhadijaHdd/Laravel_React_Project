<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\MVT_CDA;
use App\Models\MVT_BRR_PESAGE_OneLine;

class Chart extends Controller
{
    public function MVT_BRR_PESAGE_OneLine_Chart()
    {
        $data = MVT_BRR_PESAGE_OneLine::orderBy('IDTraitements', 'desc')->take(10)->get();
        return (response()->json([
            'status' => 301,
            'table' => $data
        ]));
    }
    public function MVT_CDA_DASH_TABLE()
    {
        $data = MVT_CDA::orderBy('IDTraitements', 'desc')->take(10)->get();
        return (response()->json([
            'status' => 301,
            'table' => $data
        ]));
    }
    public function MVT_PNT_DASH_TABLE()
    {
        $data = MVT_CDA::orderBy('IDTraitements', 'desc')->take(10)->get();
        return (response()->json([
            'status' => 301,
            'table' => $data
        ]));
    }
    public function ChartData()
    {
        $data = MVT_BRR_PESAGE_OneLine::orderBy('IDTraitements', 'desc')->take(8)->get();
        return (response()->json([
            'status' => 301,
            'table' => $data
        ]));
    }
}
