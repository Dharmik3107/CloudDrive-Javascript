import React, { useRef } from "react";
import "./InputText.scss";

const InputText = ({ label, ...otherProps }) => {
	const inputRef = useRef();

	const handleFocus = () => {
		inputRef.current.focus();
	};

	return (
		<div className="input-text-container">
			<input ref={inputRef} {...otherProps} />
			<label htmlFor={label} className={`${otherProps.value.length ? "shrink" : ""}`} onClick={handleFocus}>
				{label}
			</label>
		</div>
	);
};

export default InputText;
