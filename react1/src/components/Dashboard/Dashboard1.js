import React from "react";
import Navbar from "../Navbar/Navbar";
import Chart1 from "./Chart/Chart1";
import Chart2 from "./Chart/Chart2";
import Chart3 from "./Chart/Chart3";
import Chart5 from "./Chart/Chart5";
import "./Dashboard1.css";
import FeaturedInfo from "./Chart/featuredInfo";
import MVT_BRR_OneLine from "./DashTable/Table";
import { Link } from "react-router-dom";
function Dashboard1() {
	return (
		<>
			<Navbar />
			<div className="Dashboard-body">
				<div className="dash-header">
					<i className="bi bi-house-fill"></i>
					<span className="dash-header-span">
						Tableau de bord &gt; Version 1
					</span>
				</div>
				<div className="Line1">
					<FeaturedInfo />
				</div>
				<div className="Line2">
					<Chart2 />
					<Chart5 />
				</div>
				<div className="Line3">
					<div className="see-more-dash1">
						<Link
							to="/mvt_brr_oneline"
							// style={{ marginBottom: "30px" }}
						>
							<span>Voir plus &gt;&gt;</span>
						</Link>
					</div>
					<MVT_BRR_OneLine />
				</div>
				<div className="Line4">
					<Chart1 />
					<Chart3 />
				</div>
			</div>
		</>
	);
}
export default Dashboard1;
