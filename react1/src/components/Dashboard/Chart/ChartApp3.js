import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Chart.css";
export default function ChartApp3() {
	const [Sor, setSortie] = useState();
	const [Ent, setEntree] = useState();
	var Entree = 1;
	var Sortie = 1;
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_brr")
			.then((res) => {
				for (let i = 0; i < res.data.table.length; i++) {
					if (res.data.table[i].Direction === "Entrée") {
						setEntree(Entree++);
					} else if (res.data.table[i].Direction === "Sortie") {
						setSortie(Sortie++);
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
	return (
		<div className="ChartApp3">
			<ul className="somme-sortie">
				<li className="sortie-span-toggle">
					<i className="bi bi-box-arrow-left sortie-icon"></i>
				</li>
				<li className="sortie-span-title">Nombre sortie véhicules</li>
				<li className="sortie-span-number">{Sor}</li>
			</ul>

			<ul className="somme-entree">
				<li className="entree-span-toggle">
					<i className="bi bi-box-arrow-in-right entree-icon"></i>
				</li>
				<li className="entree-span-title">Nombre entrée véhicules</li>
				<span className="entree-span-number">{Ent}</span>
			</ul>
		</div>
	);
}
