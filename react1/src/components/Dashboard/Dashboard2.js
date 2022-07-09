import React from "react";
import "./Dashboard2.css";
import Navbar from "../Navbar/Navbar";
import ChartApp2 from "./Chart/ChartApp2";
import ChartApp3 from "./Chart/ChartApp3";
import ChartApp4 from "./Chart/ChartApp4";
import ChartApp5 from "./Chart/ChartApp5";
import ChartApp6 from "./Chart/ChartApp6";
import ChartApp7 from "./Chart/ChartApp7";
import DashTable2 from "./DashTable/DashTable2";
import { Link } from "react-router-dom";
export default function Dashboard2() {
	return (
		<>
			<Navbar />
			<div className="dashboard-body">
				<div className="dash-header">
					<i className="bi bi-house-fill"></i>
					<span className="dash-header-span">
						Tableau de bord &gt; Version 2
					</span>
				</div>
				<div className="dash-top">
					<ul className="dash-top-list">
						<ChartApp3 />
						<ChartApp4 />
						<ChartApp5 />
					</ul>
				</div>
				<div className="dash-center">
					<div className="dashboard2-table">
						<h6 className="dashboard2-table-title">
							Tables des 10 dernières statistiques du contrôle d'accès
						</h6>
						<Link to="/mvt_cda" style={{ marginBottom: "30px" }}>
							<span>Voir plus &gt;&gt;</span>
						</Link>
						<DashTable2 />
					</div>
					<ul className="dash-chart-list">
						<li className="dash-chartapp6">
							<ChartApp6 />
						</li>
						<li className="dash-chartapp7">
							<ChartApp7 />
						</li>
					</ul>
				</div>
				<div className="dash-bottom">
					<ChartApp2 />
				</div>
			</div>
		</>
	);
}
