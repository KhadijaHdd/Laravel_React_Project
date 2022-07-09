import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Style.css";
import BootstrapTable from "react-bootstrap-table-next";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

export default function Home() {
	const [table, setData] = useState([]);
	const columns = [
		{ dataField: "IDTraitements", text: "iDTraitements", sort: true },
		{ dataField: "mode", text: "mode" },
		{ dataField: "Date_Entree", text: "Date_Entree", sort: true },
		{ dataField: "Date_Sortie", text: "Date_Sortie", sort: true },
		{ dataField: "Matricule", text: "Matricule", filter: textFilter() },
		{
			dataField: "Chauffeur_Entree",
			text: "Chauffeur_Entree",
			sort: true,
			filter: textFilter(),
		},
	];

	const fetchTable = () => {
		axios.post("http://localhost:8000/api/mvt_brr_oneline").then((res) => {
			setData(res.data.table);
		});
	};
	useEffect(() => {
		fetchTable();
	}, []);

	return (
		<div>
			<BootstrapTable
				bootstrap4
				keyField="IDTraitements"
				columns={columns}
				data={table}
				filter={filterFactory()}
			/>
		</div>
	);
}
