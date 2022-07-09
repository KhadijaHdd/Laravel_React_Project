import React, { useEffect, useState } from "react";
import logo from "../../img/averdalogowhite.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	const Logout = () => {
		localStorage.setItem("HdiwnUqgxiJqvxuwkJcbwk", null);
		window.location.href = "/";
	};

	const [AdminId, setAdminId] = useState();
	const [sidebar, setSidebar] = useState(true);
	const showSidebar = () => setSidebar(!sidebar);
	const [menu1, setMenu1] = useState(true);
	const showMenu1 = () => setMenu1(!menu1);
	const [menu2, setMenu2] = useState(true);
	const showMenu2 = () => setMenu2(!menu2);
	const [menu3, setMenu3] = useState(true);
	const showMenu3 = () => setMenu3(!menu3);
	return (
		<div className="nav">
			<nav className="nav-bar">
				<a
					href="https://www.averda.com/where-we-operate/morocco"
					target="_blank"
				>
					<img src={logo} alt="AverdaLogo" className="logo" />
				</a>
			</nav>
			<div
				className="menu-toggle-btn"
				onClick={showSidebar}
				style={{ marginLeft: sidebar ? "70px" : "240px" }}
			>
				<i className="bi bi-list"></i>
			</div>

			<div className={sidebar ? "sidebar-close" : "sidebar"}>
				{/* BODY */}
				<div
					className="sidebar-menu"
					style={{ display: sidebar ? "none" : "" }}
				>
					<div className="sidebar-body">
						<ul className="sidebar-ul-body">
							<li
								className="sidebar-li-body"
								style={{ backgroundColor: menu3 ? "" : "#06213a63" }}
								onClick={showMenu3}
							>
								<button className="dropdown-btn">
									<div className="menu-toggle">
										<i className="bi bi-house-door-fill"></i>
									</div>
									<span className="menu-span">Tableau de board</span>
									<i
										className={
											menu3 ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"
										}
										style={{ paddingLeft: "36px" }}
									></i>{" "}
								</button>
							</li>
							<div
								className="dropdown-content"
								style={{ display: menu3 ? "none" : "block" }}
							>
								<Link to="/Dashboard1" className="link">
									<span className="submenu-span">Tableau 1</span>
								</Link>
								<Link to="/Dashboard2" className="link">
									<span className="submenu-span">Tableau 2</span>
								</Link>
							</div>
							<li
								className="sidebar-li-body"
								style={{ backgroundColor: menu1 ? "" : "#06213a63" }}
								onClick={showMenu1}
							>
								<button className="dropdown-btn">
									<div className="menu-toggle">
										<i className="bi bi-person-fill"></i>
									</div>
									<span className="menu-span">Personnes</span>
									<i
										className={
											menu1 ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"
										}
									></i>{" "}
								</button>
							</li>
							<div
								className="dropdown-content"
								style={{ display: menu1 ? "none" : "block" }}
							>
								<Link to="/mvt_pnt" className="link">
									<span className="submenu-span">Pointage</span>
								</Link>
								<Link to="/mvt_cda" className="link">
									<span className="submenu-span">Contrôle d'accès</span>
								</Link>
							</div>
							<li
								className="sidebar-li-body"
								style={{ backgroundColor: menu2 ? "" : "#06213a63" }}
								onClick={showMenu2}
							>
								<button className="dropdown-btn">
									<div className="menu-toggle">
										<i className="fa-solid fa-truck"></i>
									</div>
									<span className="menu-span">Véhicules</span>
									<i
										style={{ paddingLeft: "90px" }}
										className={
											menu2 ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"
										}
									></i>
								</button>
							</li>
							<div
								className="dropdown-content"
								style={{ display: menu2 ? "none" : "block" }}
							>
								<Link to="/mvt_brr" className="link">
									<span className="submenu-span">Accès véhicules </span>
								</Link>
								<Link to="/mvt_brr_pesage" className="link">
									<span className="submenu-span">Accès pesage</span>
								</Link>
							</div>
						</ul>
					</div>
					{/* FOOTER */}
					<div className="sidebar-footer">
						<ul className="sidebar-ul-footer">
							<Link to="/change_mdp" className="link">
								<li className="sidebar-li-footer">
									<div className="menu-toggle-footer">
										<i className="bi bi-key-fill"></i>
									</div>
									<span className="menu-span">Changer mot de passe</span>
								</li>
							</Link>
							<Link to="#" className="link">
								<li className="sidebar-li-footer" onClick={Logout}>
									<div className="menu-toggle-footer">
										<i className="bi bi-box-arrow-left"></i>
									</div>
									<span className="menu-span">Se déconnecter </span>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
