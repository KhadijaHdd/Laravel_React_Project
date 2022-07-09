import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

///////////////////////////////////////////////

import Dashboard1 from "./components/Dashboard/Dashboard1";
import Login from "./components/Login/Login";
import ChangePassword from "./components/ChangePassword/ChangePassword";
//MVT_BRR
import MVT_BRR from "./components/Tables/MVT_BRR";
import MVT_BRR_OneLine from "./components/Tables/MVT_BRR_OneLine";
//MVT_BRR_PESAGE
import MVT_BRR_PESAGE from "./components/Tables/MVT_BRR_PESAGE";
import MVT_BRR_PESAGE_OneLine from "./components/Tables/MVT_BRR_PESAGE_OneLine";
//MVT_CDA
import MVT_CDA from "./components/Tables/MVT_CDA";
import MVT_CDA_OneLine from "./components/Tables/MVT_CDA_OneLine";
//MVT_PNT
import MVT_PNT from "./components/Tables/MVT_PNT";
import MVT_PNT_OneLine from "./components/Tables/MVT_PNT_OneLine";
import Dashboard2 from "./components/Dashboard/Dashboard2";

////////////////////////////////////////////////

export default function App() {
	var isLoggedIn = JSON.parse(localStorage.getItem("HdiwnUqgxiJqvxuwkJcbwk"));
	const navigate = useNavigate();
	useEffect(() => {
		if (isLoggedIn == null) {
			navigate("/");
		}
	}, []);
	return (
		<>
			<Routes>
				{/* LOGIN */}
				<Route path="/" element={<Login />} />
				{/* Changer Mot De Passe */}
				<Route path="/change_mdp" element={<ChangePassword />} />
				{/* DASHBOARD 1 */}
				<Route path="/Dashboard1" element={<Dashboard1 />} />
				{/* DASHBOARD 2 */}
				<Route path="/Dashboard2" element={<Dashboard2 />} />
				{/* MVT_BRR */}
				<Route path="/mvt_brr" element={<MVT_BRR />} />
				<Route path="/mvt_brr_oneline" element={<MVT_BRR_OneLine />} />
				{/* MVT_BRR_PESAGE */}
				<Route path="/mvt_brr_pesage" element={<MVT_BRR_PESAGE />} />
				<Route
					path="/mvt_brr_pesage_oneline"
					element={<MVT_BRR_PESAGE_OneLine />}
				/>
				{/* MVT_CDA */}
				<Route path="/mvt_cda" element={<MVT_CDA />} />
				<Route path="/mvt_cda_oneline" element={<MVT_CDA_OneLine />} />
				{/* MVT_PNT */}
				<Route path="/mvt_pnt" element={<MVT_PNT />} />
				<Route path="/mvt_pnt_oneline" element={<MVT_PNT_OneLine />} />
			</Routes>
		</>
	);
}
