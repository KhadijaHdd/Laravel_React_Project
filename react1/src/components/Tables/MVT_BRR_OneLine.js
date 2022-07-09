import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import Button from "@mui/material/Button";
import paginationFactory from "react-bootstrap-table2-paginator";
import ReactToPrint from "react-to-print";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import HeaderPrint from "./HeaderPrint";

import filterFactory, {
	textFilter,
	Comparator,
	dateFilter,
} from "react-bootstrap-table2-filter";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function MVT_BRR_OneLine() {
	const [table, setData] = useState([]);
	const componentRef = useRef();
	const columns = [
		{
			dataField: "IDTraitements",
			text: "ID",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px" },
			}),
		},
		{
			dataField: "Date_Entree",
			text: "Date d'entrée",
			sort: true,
			filter: dateFilter({
				comparators: [Comparator.EQ],
				defaultValue: { comparator: Comparator.EQ },
				comparatorStyle: { display: "none" },
				dateStyle: {
					fontSize: "11px",
					width: "115%",
					marginLeft: "-10px",
				},
			}),
		},
		{
			dataField: "Date_Sortie",
			text: "Date de sortie",
			sort: true,
			filter: dateFilter({
				comparators: [Comparator.EQ],
				defaultValue: { comparator: Comparator.EQ },
				comparatorStyle: { display: "none" },
				dateStyle: {
					fontSize: "11px",
					width: "115%",
					//marginLeft: "-10px",
				},
			}),
		},
		{
			dataField: "Matricule",
			text: "Matricule",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px" },
			}),
		},
		{
			dataField: "Chauffeur_Entree",
			text: "Chauffeur entrée",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px" },
			}),
		},
		{
			dataField: "Chauffeur_Sortie",
			text: "Chauffeur sortie",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px" },
			}),
		},
		{
			dataField: "Fournisseur",
			text: "Fournisseur",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px" },
			}),
		},
		{
			dataField: "TypeA",
			text: "Type Accès",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px" },
			}),
		},
	];

	const fetchTable = () => {
		axios.get("http://localhost:8000/api/mvt_brr_oneline").then((res) => {
			setData(res.data.table);
		});
	};
	useEffect(() => {
		fetchTable();
	}, []);

	return (
		<>
			<Navbar />
			<div className="table-header">
				<i className="fa-solid fa-truck truck-toggle"></i>
				<span className="table-header-span">
					Véhicules &gt; Accès véhicules &gt; Fusionnée{" "}
				</span>
			</div>
			<div className="body-div" ref={componentRef}>
				<HeaderPrint />
				<div className="table-title-print-div">
					<span className="table-name-print">Accès véhicules : Fusionnée</span>
				</div>
				<div className="table-buttons">
					<div className="type-div">
						<Link to="/mvt_brr" className="btn-link">
							Séparée
						</Link>
						<Link
							to="/mvt_brr_oneline"
							className="btn-link"
							style={{ borderBottom: "solid 3px #4275c1" }}
						>
							Fusionnée
						</Link>
					</div>
					<div className="csv-buttons">
						<ReactHTMLTableToExcel
							className="download-table-xls-button"
							table="BrrOL"
							filename="table"
							sheet="tablexls"
							buttonText={
								<Button
									variant="contained"
									size="small"
									style={{
										backgroundColor: "#ebebeb",
										color: "rgb(92, 92, 92)",
									}}
								>
									<i
										class="bi bi-file-earmark-spreadsheet-fill"
										style={{ fontStyle: "unset" }}
									>
										&nbsp;&nbsp;Exporter
									</i>
								</Button>
							}
						/>

						<ReactToPrint
							trigger={() => (
								<Button
									variant="contained"
									size="small"
									style={{
										backgroundColor: "#ebebeb",
										color: "rgb(92, 92, 92)",
									}}
								>
									<i class="fa-solid fa-print"></i>
									&nbsp;&nbsp;Imprimer
								</Button>
							)}
							content={() => componentRef.current}
						/>
					</div>
				</div>

				<BootstrapTable
					bootstrap4
					id="BrrOL"
					keyField="IDTraitements"
					columns={columns}
					data={table}
					filter={filterFactory()}
					pagination={paginationFactory({
						sizePerPageList: [
							{
								text: "5",
								value: 5,
							},
							{
								text: "10",
								value: 10,
							},
							{
								text: "15",
								value: 15,
							},
							{
								text: "Tout",
								value: table.length,
							},
						],
					})}
				/>
			</div>
		</>
	);
}
