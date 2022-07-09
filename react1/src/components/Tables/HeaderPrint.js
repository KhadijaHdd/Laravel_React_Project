import React from "react";
import logo from "../../img/averdalogowhite.svg";
import logo2 from "../../img/royaumeLogo.png";
import "./TableStyle.css";


export default function HeaderPrint(){

return(
    <div>
        <img className="logo-print" src={logo}/>
		<img className="logo-print2" src={logo2}/>

    </div>
)



}