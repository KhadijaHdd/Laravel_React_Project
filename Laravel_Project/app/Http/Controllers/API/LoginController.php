<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Login;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    function login(Request $req)
    {
        $UserData = Login::where('Utilisateur', '=', $req->Utilisateur)->first();
        $UserID = Login::select('id')->where('Utilisateur', '=', $req->Utilisateur)->first();
        $UserName = Login::select('Utilisateur')->where('Utilisateur', '=', $req->Utilisateur)->first();

        if ($UserData) {
            if ((($req->MotDePasse) == ($UserData->MotDePasse))  && (($UserData->Administrateur) == true)) {
                return (response()->json([
                    'status' => 200,
                    'message' => 'welcome',
                    'id' => $UserID,
                    'username' => $UserName
                ]));
            } else if (($req->MotDePasse) != ($UserData->MotDePasse)) {
                return (response()->json([
                    'status' => 300,
                    'message' => 'wrong password'
                ]));
            } else if (($UserData->Administrateur) == false) {
                return (response()->json([
                    'status' => 400,
                    'message' => 'you are not an admin',
                ]));
            }
        } else {
            return (response()->json([
                'status' => 500,
                'message' => 'no account'
            ]));
        };
    }
    function change_mdp(Request $req, $id)
    {
        $mdp = Login::where('id', $id)->where('MotDePasse', $req->MotDePasse)->first();
        $validator = Validator::make($req->all(), [
            'NewPass' => ['required', Password::min(8)],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 295,
                'message' => "mdp < 8 ",
            ]);
        }
        if ($mdp) {
            if (($req->MotDePasse) == ($mdp->MotDePasse)  && ($req->MotDePasse) != ($req->NewPass) && ($req->NewPass) == ($req->VerifPass)) {
                $mdp->MotDePasse = $req->NewPass;
                $mdp->update();
                return response()->json([
                    'status' => 100,
                    'message' => 'Password changed successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 300,
                    'message' => 'Other error',
                ]);
            }
        } else
            return response()->json([
                'status' => 200,
                'message' => "False current pass",
            ]);
    }
}
