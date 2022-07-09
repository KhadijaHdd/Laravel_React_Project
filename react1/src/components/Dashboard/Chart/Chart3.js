import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart, Bar, Pie, Line, PolarArea } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";

function Barchart() {
	const [list, setList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/Chart")
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
		labels: list.map((x) => x.IDTraitements),
		datasets: [
			{
				label: "Poid",
				data: list.map((x) => x.Poids_Sortie),
				backgroundColor: [
					"#A9D2FB",
					"#F4C7D8 ",
					"#E1FBA9",
					"#E0C7F4",
					"#F4CEC7",
				],
				borderWidth: 2,
				borderColor: "white",
			},
		],
	};
	return (
		<>
			<div className="Chart3">
				<Line
					data={ChartData}
					options={{
						plugins: {
							title: {
								display: true,
								color: "white",
								text: "Poids Sortie",
								font: {
									size: 20,
								},
								padding: {
									top: 10,
									bottom: 15,
								},
							},
							legend: {
								display: false,
							},
						},
						scales: {
							x: {
								grid: {
									display: false,
									drawBorder: false,
								},
								ticks: {
									display: false,
								},
							},
							y: {
								grid: {
									display: false,
									drawBorder: false,
								},
								ticks: {
									display: false,
								},
							},
						},
					}}
				/>
			</div>
		</>
	);
}
export default Barchart;
