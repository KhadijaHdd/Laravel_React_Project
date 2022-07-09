import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";
function Chart2() {
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
		labels: list.map((x) => x.Fournisseur),
		datasets: [
			{
				label: "",
				data: list.map((x) => x.NET),
				backgroundColor: ["#00BBDC", "#A1E8F5"],
				borderWidth: 1,
			},
		],
	};
	return (
		<> 
			<div className="Chart2 ">
				<Bar
					data={ChartData}
					options={{
						plugins: {
							title: {
								display: true,
								text: " NET des fournisseur",
								padding: {
									top: 10,
									bottom: 15,
								},
								font: {
									size: 20,
								},
							},
							legend: {
								display: false,
							},
						},
					}}
				/>
			</div>
		</>
	);
}
export default Chart2;
