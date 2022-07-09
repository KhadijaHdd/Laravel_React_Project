import React, { useEffect, useState } from "react";
import { Chart, ChartJS } from "chart.js/auto";
import { Doughnut, Bar, Pie, Line } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";
export default function ChartApp5() {
	const [Ent, setEntree] = useState();
	var Entree = 1;
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_pnt")
			.then((res) => {
				for (let i = 0; i < res.data.table.length; i++) {
					if (res.data.table[i].Direction === "Entrée") {
						setEntree(Entree++);
					}
				}
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response);
					console.log("server responded");
				} else if (error.request) {
					console.log("network error");
				} else {
					console.log(error);
					console.log("error catch");
				}
			});
	}, []);
	// return <div className="ChartApp5"></div>;
	return (
		<div className="ChartApp4">
			<ul className="somme-pnt">
				<li className="pnt-span-toggle">
					<i class="bi bi-file-person"></i>
				</li>
				<li className="pnt-span-title">
					Nombre entrée personnes <br />
					(Pointage)
				</li>
				<li className="pnt-span-number">{Ent}</li>
			</ul>
		</div>
	);
}
