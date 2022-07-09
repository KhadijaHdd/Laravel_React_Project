import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import "./Chart.css";

function Chart5() {
	const [SumPE, setSumPE] = useState();
	const [SumPS, setSumPS] = useState();
	var PE = 0;
	var PS = 0;
	const [list, setList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_brr_pesage_oneline")
			.then((res) => {
				setList(res.data.table);
				for (let i = 0; i < res.data.table.length; i++) {
					PE += parseFloat(res.data.table[i].Poids_Entree);
					PS += parseFloat(res.data.table[i].Poids_Sortie);
					setSumPE(PE);
					setSumPS(PS);
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
				data: [SumPE, SumPS],
				backgroundColor: ["#ff420f", "#ffccc0 "],

				borderWidth: 1,
				borderColor: "#ffccc0",
				cutout: "70%",
			},
		],

		labels: ["Entrée", "Sortie "],
	};
	return (
		<>
			<div className="Chart5">
				<Doughnut
					data={ChartData}
					options={{
						plugins: {
							title: {
								display: true,
								text: "Somme des poids d entrées et de sorties",
								padding: {
									top: 10,
									bottom: 15,
								},
								font: {
									size: 15,
								},
							},
							legend: {
								display: true,
								position: "bottom",
							},
						},
					}}
				/>
			</div>
		</>
	);
}
export default Chart5;
