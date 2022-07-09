import "./featuredInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./featuredInfo.css";
export default function FeaturedInfo() {
	const [SumPE, setSumPE] = useState();
	const [SumNET, setSumNET] = useState();
	const [CountP, setCountP] = useState();
	const [CountV, setCountV] = useState();
	const [CountAll, setCountAll] = useState();
	var PE = 0;
	var NET = 0;
	var CP = 0;
	var CV = 0;
	var CAll = 0;
	const [list, setList] = useState([]);
	var TypeAV = ((CountV / CountAll) * 100).toFixed(2);
	var TypeAP = ((CountP / CountAll) * 100).toFixed(2);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_brr_pesage_oneline")
			.then((res) => {
				setList(res.data.table);
				for (let i = 0; i < res.data.table.length; i++) {
					CAll++;
					PE += parseFloat(res.data.table[i].Poids_Entree);
					NET += parseFloat(res.data.table[i].NET);
					if (res.data.table[i].TypeA === "P") {
						CP++;
						setCountP(CP);
					} else {
						CV++;
						setCountV(CV);
					}
					setCountAll(CAll);
					setSumPE(PE);
					setSumNET(NET);
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
		<>
			<div className="featured">
				<div className="featuredItem1">
					<div class="card-icon-wrapper">
						<span className="featuredTitle">Type d'Accès</span>
						<i class="bi bi-truck"></i>
					</div>

					<div className="featuredNumbers">
						<span className="Numbers-div">{TypeAP}</span>
						<span className="Symbol">% </span>
					</div>
					<span className="featuredSub">
						Le pourcentage des accès de type <strong>véhicules</strong>
					</span>
				</div>
				<div className="featuredItem2">
					<span className="featuredTitle">Type d'Accès </span>
					<i class="bi bi-person"></i>
					<div className="featuredNumbers">
						<span className="Numbers-div">{TypeAV}</span>
						<span className="Symbol">%</span>
					</div>
					<span className="featuredSub">
						Le pourcentage des accès de type <strong>Personnes</strong>
					</span>
				</div>
				<div className="featuredItem3">
					<span className="featuredTitle"> NET des véhicules </span>
					<i class="bi bi-box-seam"></i>
					<div className="featuredNumbers">
						<span className="Numbers-div">{SumNET}</span>
						<span className="Symbol">Kg</span>
					</div>
					<span className="featuredSub">
						{" "}
						NET = (Poid Entrée - Poids sortie)
					</span>
				</div>
				<div className="featuredItem4">
					<span className="featuredTitle">Poid d'Entrée</span>
					<i class="bi bi-box-arrow-in-right"></i>
					<div className="featuredNumbers">
						<span className="Numbers-div">{SumPE}</span>
						<span className="Symbol">Kg</span>
					</div>
					<span className="featuredSub">La sommes des poids d'entrées</span>
				</div>
			</div>
		</>
	);
}
