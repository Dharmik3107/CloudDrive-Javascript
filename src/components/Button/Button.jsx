import React from "react";
import "./Button.scss";

const BUTTON_CLASSES = {
	inverted: "inverted-button",
	google: "google-button",
};

const Button = ({ text, buttonType, ...otherProps }) => {
	return (
		<button {...otherProps} className={`default-button ${BUTTON_CLASSES[buttonType]} `}>
			{text}
		</button>
	);
};

export default Button;
