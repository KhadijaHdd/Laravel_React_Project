import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DashTable2.css";

export default function DashTable() {
	const [table, setTable] = useState([]);
	const fetchTable = () => {
		axios
			.get("http://localhost:8000/api/mvt_cda_dash")
			.then((res) => {
				setTable(res.data.table);
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
			<tr className="dash2-tr" key={id}>
				<td className="dash2-td" style={{ width: "90px" }}>
					{item.idPorte}
				</td>
				<td className="dash2-td" style={{ width: "95px" }}>
					{item.Direction}
				</td>
				<td className="dash2-td">{item.date}</td>
				<td className="dash2-td">{item.CIN}</td>
				<td className="dash2-td" style={{ width: "180px" }}>
					{item.Personnel}
				</td>
			</tr>
		);
	});
	return (
		<table className="dash2-table">
			<thead className="dash2-thead">
				<tr className="dash2-tr">
					<th className="dash2-th" style={{ width: "90px" }}>
						ID Porte
					</th>
					<th className="dash2-th" style={{ width: "95px" }}>
						Direction
					</th>
					<th className="dash2-th">Date &amp; Heure</th>
					<th className="dash2-th">CIN</th>
					<th className="dash2-th" style={{ width: "180px" }}>
						Personnel
					</th>
				</tr>
			</thead>
			<tbody className="dash2-tbody">{DB_TABLE}</tbody>
		</table>
	);
}
