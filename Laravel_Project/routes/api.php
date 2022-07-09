<?php

use App\Http\Controllers\API\Chart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\MVT_BRR_Controller;
use App\Http\Controllers\API\MVT_BRR_PESAGE_Controller;
use App\Http\Controllers\API\MVT_CDA_Controller;
use App\Http\Controllers\API\MVT_PNT_Controller;

//LOGIN ROUTE
Route::post("/login", [LoginController::class, "login"]);
Route::post("/change_mdp/{id}", [LoginController::class, "change_mdp"]);

// MVT_BRR
Route::get("/mvt_brr", [MVT_BRR_Controller::class, "MVT_BRR"]);
Route::get("/mvt_brr_oneline", [MVT_BRR_Controller::class, "MVT_BRR_OneLine"]);

//MVT_BRR_PESAGE
Route::get("/mvt_brr_pesage", [MVT_BRR_PESAGE_Controller::class, "MVT_BRR_PESAGE"]);
Route::get("/mvt_brr_pesage_oneline", [MVT_BRR_PESAGE_Controller::class, "MVT_BRR_PESAGE_OneLine"]);

//MVT_CDA
Route::get("/mvt_cda", [MVT_CDA_Controller::class, "MVT_CDA"]);
Route::get("/mvt_cda_oneline", [MVT_CDA_Controller::class, "MVT_CDA_OneLine"]);

//MVT_PNT
Route::get("/mvt_pnt", [MVT_PNT_Controller::class, "MVT_PNT"]);
Route::get("/mvt_pnt_oneline", [MVT_PNT_Controller::class, "MVT_PNT_OneLine"]);

//ChartJS
Route::get("/mvt_pesage_dash", [Chart::class, "MVT_BRR_PESAGE_OneLine_Chart"]);
Route::get("/mvt_cda_dash", [Chart::class, "MVT_CDA_DASH_TABLE"]);
Route::get("/mvt_pnt_dash", [Chart::class, "MVT_PNT_DASH_TABLE"]);
Route::get("/Chart", [Chart::class, "ChartData"]);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
