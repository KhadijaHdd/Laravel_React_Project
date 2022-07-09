import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import "./Login.css";

export default function Login() {
	const navigate = useNavigate();
	const [ErrorAll, setErrorAll] = useState(true);

	const [data, setData] = useState({
		Utilisateur: "",
		MotDePasse: "",
		showPassword: false,
	});
	const handleClickShowPassword = () => {
		setData({
			...data,
			showPassword: !data.showPassword,
		});
	};

	const handleMouseDownPassword = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			Utilisateur: data.Utilisateur,
			MotDePasse: data.MotDePasse,
		};
		axios
			.post("http://localhost:8000/api/login", userData)
			.then((response) => {
				if (response.data.status === 200) {
					localStorage.setItem(
						"HdiwnUqgxiJqvxuwkJcbwk",
						JSON.stringify(response.data.id.id)
					);
					
					navigate("/Dashboard1");
					console.log(response.data);
					//////////////////////////////////////////////////////////////////
				} else if (response.data.status === 300) {
					console.log("Wrong mdp");
					setErrorAll(!ErrorAll);
					//////////////////////////////////////////////////////////////////
				} else if (response.data.status === 400) {
					console.log("You are not an admin");
					alert("Vous n'avez pas l'acces");
					//////////////////////////////////////////////////////////////////s
				} else if (response.data.status === 500) {
					console.log("Compte introuvable");
					setErrorAll(!ErrorAll);
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
					console.log("error");
				}
			});
	};
	return (
		<form onSubmit={handleSubmit} className="page-body">
			{/* component="form"  */}
			<div>
				<div className="login-box">
					<header className="login-header">
						<h3 className="seconnect-text">SE CONNECTER</h3>
					</header>
					<div className="input-container">
						<FormControl
							sx={{ m: 1, width: "25ch" }}
							variant="standard"
							style={{
								backgroundColor: ErrorAll ? "" : "#ff00000f",
								borderRadius: ErrorAll ? "" : "5px",
							}}
						>
							<InputLabel
								style={{
									color: ErrorAll ? "" : "red",
									paddingTop: "6px",
									paddingLeft: "9px",
								}}
							>
								Nom d'utilisateur
							</InputLabel>
							<Input
								style={{ marginTop: "25px" }}
								name="Utilisateur"
								value={data.Utilisateur}
								onChange={handleChange}
								id="standard-basic"
								variant="standard"
								color={ErrorAll ? "" : "error"}
								required
								endAdornment={
									<InputAdornment
										position="end"
										variant="filled"
										style={{
											cursor: "pointer",
										}}
									>
										<AccountCircle />
									</InputAdornment>
								}
							/>
						</FormControl>
					</div>
					<div className="input-container">
						<FormControl
							sx={{ m: 1, width: "25ch" }}
							variant="standard"
							style={{
								backgroundColor: ErrorAll ? "" : "#ff00000f",
								borderRadius: ErrorAll ? "" : "5px",
							}}
						>
							<InputLabel
								style={{
									color: ErrorAll ? "" : "red",
									paddingTop: "6px",
									paddingLeft: "9px",
								}}
							>
								Mot De Passe
							</InputLabel>
							<Input
								style={{ marginTop: "25px" }}
								required
								name="MotDePasse"
								id="standard-adornment-password"
								autoComplete="current-password"
								variant="standard"
								type={data.showPassword ? "text" : "password"}
								color={ErrorAll ? "" : "error"}
								value={data.MotDePasse}
								onChange={handleChange}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											// edge="end"
										>
											{data.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</div>
					<div className="button-container">
						<Button
							variant="contained"
							type="submit"
							className="submit-btn"
							style={{ background: "#046ec0" }}
						>
							Connexion
						</Button>
					</div>
				</div>
			</div>
		</form>
	);
}
