import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import "./NavigationBar.scss";
import Logo from "../../assets/Logo.svg";
import iconArray from "./../../assets/Icons";
import NavField from "../NavField/NavField";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<nav className={`navigation-container ${isOpen ? "opened-sidebar" : ""}`}>
				<div className="logo-container">
					<img src={Logo} alt="Logo" />
				</div>
				<div className="navitem-container">
					{iconArray.map((element, index) => {
						return (
							<Link to={element.link} key={index} className="link">
								<NavField icon={element.icon} text={element.title} />
							</Link>
						);
					})}
				</div>
			</nav>
			<div className="hamburger-container">
				<Hamburger size="20" color="#000" toggled={isOpen} toggle={setOpen} direction="left" label="show menu" duration={0.4} />
			</div>
		</>
	);
};

export default NavigationBar;
