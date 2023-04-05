import React from "react";
import "./NavField.scss";

const NavField = ({ icon, text }) => {
	return (
		<div className="navfield-container">
			<img src={icon} alt={`${text}`} />
			<h6>{text}</h6>
		</div>
	);
};

export default NavField;
