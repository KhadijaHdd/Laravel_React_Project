import React, { useEffect, useState } from "react";
import { Chart, ChartJS } from "chart.js/auto";
import { Doughnut, Bar, Pie, Line } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";
export default function ChartApp6() {
	const [PesEnt, setPesEnt] = useState();
	const [PesSor, setPesSor] = useState();
	var PesageE = 1;
	var PesageS = 1;
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_brr_pesage")
			.then((res) => {
				for (let i = 0; i < res.data.table.length; i++) {
					if (res.data.table[i].Direction === "Entrée") {
						setPesEnt(PesageE++);
					} else if (res.data.table[i].Direction === "Sortie") {
						setPesSor(PesageS++);
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
	const ChartData = {
		labels: ["Entrée", "Sortie"],
		datasets: [
			{
				label: "",
				data: [PesEnt, PesSor],
				backgroundColor: ["#ecc1cdbd", "#77a8c5cc"],
				borderColor: ["#ECC1CD", "#77a9c5"],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className="ChartApp7">
			<h6 className="chart7-title">Nombre de véhicule de pesage</h6>
			<div className="chart7-div">
				<div className="Chart7-Canva">
					<Doughnut
						data={ChartData}
						options={{
							maintainAspectRatio: false,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
