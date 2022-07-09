import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
export default function MVT_BRR() {
	const [table, setTable] = useState([]);
	const fetchTable = () => {
		axios
			.get("http://localhost:8000/api/Chart")
			.then((res) => {
				setTable(res.data.table);
				console.log(res.data.table);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchTable();
	}, []);
	const DB_TABLE = table.map((item, id) => {
		return (
			<tr className="dash-tr" key={id}>
				<td className="dash-td">{item.Fournisseur}</td>
				<td className="dash-td">{item.Date_Entree}</td>
				<td className="dash-td">{item.Date_Sortie}</td>
				<td className="dash-td">{item.Poids_Entree}</td>
				<td className="dash-td">{item.Poids_Sortie}</td>
				<td className="dash-td">{item.NET}</td>
				<td className="dash-td">{item.TypeA}</td>
			</tr>
		);
	});
	return (
		<div className="table-box">
			<table className="dash-table">
				<thead className="dash-thead">
					<tr className="dash-tr2">
						<th className="dash-th">Fournisseur</th>
						<th className="dash-th">Date_Entree</th>
						<th className="dash-th">Date_Sortie</th>
						<th className="dash-th">Poids_Entree</th>
						<th className="dash-th">Poids_Sortie</th>
						<th className="dash-th">NET</th>
						<th className="dash-th"> TypeA</th>
					</tr>
				</thead>
				<tbody className="dash-tbody">{DB_TABLE}</tbody>
			</table>
		</div>
	);
}
