import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line}            from 'react-chartjs-2'
import axios from "axios";
import "./Chart.css"


function Chart1() {
	const [list, setList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/mvt_brr_pesage_oneline")
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
				data: list.map((x) => x.Poids_Entree),
				borderWidth: 2,
				borderColor: 'white',
			}		
		],
		
    }
	return (
		<>
		<div className="Chart1">
		<Line data={ChartData} 
		      options={{
				maintainAspectRatio:false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Poids Entree',
						font: {
							size: 20
						  },
						color:'white',
                        padding: {
                            top: 10,
                            bottom: 15
                        }
						
                    },
                    legend: {
                        display: false,                        
                    }
				},
					scales: {

					  x: {
						
						grid: {
						
						  display: false,
						  drawBorder: false,
						},
						ticks:{
							display:false
						},
					  },
					  y: {
						grid: {
						  display: false,
						  drawBorder: false,

						},
						ticks:{
							display:false
						},
					  }
				
				
				},
			
              }}
			

		  />
		</div>
		</>
	);
}
export default Chart1;
