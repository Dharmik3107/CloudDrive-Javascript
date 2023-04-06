import React from "react";
import "./DotMenuField.scss";

const DotMenuField = ({ text, icon }) => {
	return (
		<button className="dot-menu-field">
			<img src={icon} alt={`${text}`} />
			<p>{text}</p>
		</button>
	);
};

export default DotMenuField;
