import React, { useEffect, useState } from "react";
import { Chart, ChartJS } from "chart.js/auto";
import { Doughnut, Bar, Pie, Line } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";
export default function ChartApp6() {
	const [PoEnt, setPoEnt] = useState();
	const [PoSor, setPoSor] = useState();
	var PoidsE = 0;
	var PoidsS = 0;
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_brr_pesage_oneline")
			.then((res) => {
				for (let i = 0; i < res.data.table.length; i++) {
					PoidsE += parseFloat(res.data.table[i].Poids_Entree);
					setPoEnt(PoidsE);
					PoidsS += parseFloat(res.data.table[i].Poids_Sortie);
					setPoSor(PoidsS);
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
	const ChartData = {
		labels: ["Poids entrée", "Poids sortie"],
		datasets: [
			{
				label: "",
				data: [PoEnt, PoSor],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
				borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
				borderWidth: 2,
			},
		],
	};
	return (
		<div className="ChartApp6">
			<h6 className="chart6-title">Somme du poids entrée et sortie (en Kg)</h6>
			<div className="chart6-div">
				<div className="Chart6-Canva">
					<Bar
						data={ChartData}
						options={{
							maintainAspectRatio: false,
							plugins: {
								legend: {
									display: false,
								},
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}
