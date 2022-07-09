import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "./TableStyle.css";
import BootstrapTable from "react-bootstrap-table-next";
import Button from "@mui/material/Button";
import paginationFactory from "react-bootstrap-table2-paginator";
import ReactToPrint from "react-to-print";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import HeaderPrint from "./HeaderPrint";

import filterFactory, {
	textFilter,
	dateFilter,
	Comparator,
} from "react-bootstrap-table2-filter";
import Navbar from "../Navbar/Navbar";

export default function MVT_PNT() {
	const [table, setTable] = useState([]);
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
			dataField: "Direction",
			text: "Direction",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px" },
			}),
		},
		{
			dataField: "date",
			text: "Date",
			sort: true,
			filter: dateFilter({
				comparators: [Comparator.EQ],
				defaultValue: { comparator: Comparator.EQ },
				comparatorStyle: { display: "none" },
				dateStyle: {
					fontSize: "11px",
				},
			}),
		},
		{
			dataField: "CIN",
			text: "CIN",
			sort: true,
			filter: textFilter({
				placeholder: " ",
				style: { fontSize: "13px", marginRight: "28px" },
			}),
		},
		{
			dataField: "Personnel",
			text: "Personnel",
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
		axios
			.get("http://localhost:8000/api/mvt_pnt")
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

	return (
		<>
			<Navbar />
			<div className="table-header">
				<i className="bi bi-person-fill person-toggle"></i>
				<span className="table-header-span">
					Personnes &gt; Pointage &gt; Séparée
				</span>
			</div>
			<div className="body-div" ref={componentRef}>
				<HeaderPrint />
				<div className="table-title-print-div">
					<span className="table-name-print">Accès pesage : Séparée</span>
				</div>
				<div className="table-buttons">
					<div className="type-div">
						<Link
							to="/mvt_pnt"
							className="btn-link"
							style={{ borderBottom: "solid 3px #4275c1" }}
						>
							Séparée
						</Link>
						<Link to="/mvt_pnt_oneline" className="btn-link">
							Fusionnée
						</Link>
					</div>
					<div className="csv-buttons">
						<ReactHTMLTableToExcel
							className="download-table-xls-button"
							table="Pnt"
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
									<i class="fa-solid fa-print"></i>&nbsp;&nbsp;Imprimer
								</Button>
							)}
							content={() => componentRef.current}
						/>
					</div>
				</div>
				<BootstrapTable
					bootstrap4
					id="Pnt"
					keyField="IDTraitements"
					columns={columns}
					data={table}
					filter={filterFactory()}
					ref={componentRef}
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
				<div></div>
			</div>
		</>
	);
}
