import React, { useEffect, useState } from "react";
import { Chart, ChartJS } from "chart.js/auto";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";
export default function ChartApp4() {
	const [PoidsNET, setPoidsNET] = useState();
	var PNet = 0;
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_brr_pesage_oneline")
			.then((res) => {
				for (let i = 0; i < res.data.table.length; i++) {
					PNet += parseFloat(res.data.table[i].NET);
					setPoidsNET(PNet);
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
	return (
		<div className="ChartApp4">
			<ul className="somme-net">
				<li className="net-span-toggle">
					<i className="fa-solid fa-weight-hanging"></i>
				</li>
				<li className="net-span-title">
					Somme poids NET <br />
					(en kg)
				</li>
				<li className="net-span-number">{PoidsNET}</li>
			</ul>
		</div>
	);
}
