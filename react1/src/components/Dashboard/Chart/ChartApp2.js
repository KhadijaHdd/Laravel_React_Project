import React, { useEffect, useState } from "react";
import { Chart, ChartJS } from "chart.js/auto";
import { Doughnut, Bar, Pie, Line, PolarArea } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";
export default function ChartApp1() {
	const [list, setList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_pesage_dash")
			.then((res) => {
				setList(res.data.table);
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
		labels: list.map((x) => x.Matricule),
		datasets: [
			{
				label: "",
				data: list.map((x) => x.NET),
				backgroundColor: ["#427fc4"],
				borderWidth: 2,
			},
		],
	};
	return (
		<div className="ChartApp2">
			<h6 className="chart2-title">
				Poids NET en Kg (10 dernières statistiques)
			</h6>
			<div className="chart2-div">
				<div className="Chart2-Canva">
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
