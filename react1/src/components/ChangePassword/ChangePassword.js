import React, { useState } from "react";
import axios from "axios";
/////////////////////////////////
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
////////////////////////////////
import PasswordChecklist from "react-password-checklist";
import Swal from "sweetalert2";
/////////////////////////////////
import "./ChangePassword.css";
import Navbar from "../Navbar/Navbar";

export default function ChangePassword() {
	const local_id = JSON.parse(localStorage.getItem("HdiwnUqgxiJqvxuwkJcbwk"));
	const [ErrorCurrent, setErrorCurrent] = useState(true);
	const [ErrorCondition, setErrorCondition] = useState(true);
	const [Success, setSuccess] = useState(false);
	const [ChangePassword, setChangePassword] = useState({
		MotDePasse: "",
		NewPass: "",
		VerifPass: "",
	});
	const [currentPass, setCurrentPass] = useState({
		showPassword: false,
	});
	const [newPass, setNewPass] = useState({
		showPassword: false,
	});
	const [verifPass, setVerifPass] = useState({
		showPassword: false,
	});
	const handleChange = (e) => {
		setChangePassword({ ...ChangePassword, [e.target.name]: e.target.value });
		setNewPass(e.target.value);
	};
	const handleClickShowCurrent = () => {
		setCurrentPass({
			...currentPass,
			showPassword: !currentPass.showPassword,
		});
	};
	const handleClickShowNew = () => {
		setNewPass({
			...newPass,
			showPassword: !newPass.showPassword,
		});
	};
	const handleClickShowVerif = () => {
		setVerifPass({
			...verifPass,
			showPassword: !verifPass.showPassword,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const NewData = {
			MotDePasse: ChangePassword.MotDePasse,
			NewPass: ChangePassword.NewPass,
			VerifPass: ChangePassword.VerifPass,
		};

		axios
			.post(`http://localhost:8000/api/change_mdp/${local_id}`, NewData)
			.then((response) => {
				if (response.data.status === 200) {
					setErrorCurrent(!ErrorCurrent);
				} else if (response.data.status === 100) {
					Swal.fire({
						icon: "success",
						title: "",
						text: "Le mot de passe a été changé avec succès",
					});
					setSuccess(!Success);
				} else if (response.data.status === 295) {
					setErrorCondition(!ErrorCondition);
				} else if (response.data.status === 300) {
					if (ChangePassword.MotDePasse === ChangePassword.NewPass) {
						Swal.fire({
							icon: "error",
							title: "",
							text: "Le nouveau mot de passe ne peut pas être le mot de passe actuel",
						});
					} else if (ChangePassword.NewPass !== ChangePassword.VerifPass) {
						Swal.fire({
							icon: "error",
							title: "",
							text: "Le mot de passe de vérification n'est pas identique",
						});
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
					console.log("error");
				}
			});
	};
	return (
		<div>
			<Navbar />
			<div className="change-div">
				<div className="ChngMdp-text">
					<h3 className="ChngMdp-h3">Changer Mot De Passe</h3>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="ChngMdp-box">
						<div
							className="wrong-pass-error"
							style={{ display: ErrorCondition ? "none" : "block" }}
						>
							<span className="wrong-pass-error-text">
								Le mot de passe doit contenir au mois 8 caractères
							</span>
						</div>
						<div className="wrap-input">
							<FormControl
								style={{
									backgroundColor: ErrorCurrent ? "" : "#ff00000f",
									borderRadius: ErrorCurrent ? "" : "5px",
								}}
							>
								<InputLabel
									style={{
										color: ErrorCurrent ? "" : "red",
										paddingTop: ErrorCurrent ? "" : "13px",
									}}
								>
									Mot de passe actuel
								</InputLabel>
								<Input
									type={currentPass.showPassword ? "text" : "password"}
									value={ChangePassword.MotDePasse}
									onChange={handleChange}
									name="MotDePasse"
									required
									color={ErrorCurrent ? "" : "error"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton onClick={handleClickShowCurrent}>
												{currentPass.showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>
						</div>
						<div className="wrap-input">
							<FormControl>
								<InputLabel>Nouveau mot de passe</InputLabel>
								<Input
									// id="standard-adornment-password"
									type={newPass.showPassword ? "text" : "password"}
									value={ChangePassword.NewPass}
									onChange={handleChange}
									name="NewPass"
									required
									endAdornment={
										<InputAdornment position="end">
											<IconButton onClick={handleClickShowNew}>
												{newPass.showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>
						</div>
						<div className="wrap-input">
							<FormControl>
								<InputLabel>Verifier le nouveau mot de passe</InputLabel>
								<Input
									// id="standard-adornment-password"
									type={verifPass.showPassword ? "text" : "password"}
									value={ChangePassword.VerifPass}
									onChange={handleChange}
									name="VerifPass"
									required
									endAdornment={
										<InputAdornment position="end">
											<IconButton onClick={handleClickShowVerif}>
												{verifPass.showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>
						</div>
						<div className="container-btn">
							{/* <button class="Envoyer-btn">Envoyer</button> */}
							<Button
								variant="contained"
								type="submit"
								className="submit-btn"
								style={{ background: "#046ec0" }}
							>
								Envoyer
							</Button>
						</div>
					</div>
				</form>
				<div className="mdp-check">
					<p className="mdp-check-title">
						Recommandation pour un mot de passe fort
					</p>
					<PasswordChecklist
						rules={["minLength", "specialChar", "number", "capital", "match"]}
						minLength={8}
						value={ChangePassword.NewPass}
						valueAgain={ChangePassword.VerifPass}
						onChange={(isValid) => {}}
						messages={{
							minLength: "Le mot de passe contient plus de 8 caractères.",
							specialChar: "Le mot de passe contient des caractères spéciaux.",
							number: "Le mot de passe a un chiffre.",
							capital: "Le mot de passe a une lettre majuscule.",
							match: "Les mots de passe sont identiques.",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
