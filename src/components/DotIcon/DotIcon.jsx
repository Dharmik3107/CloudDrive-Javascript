import React, { useState, useCallback } from "react";
import Dots from "../../assets/Dots.svg";
import DotMenu from "../DotMenu/DotMenu";
import "./DotIcon.scss";

const DotIcon = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleDotsClick = useCallback(() => {
		setMenuOpen((isMenuOpen) => !isMenuOpen);
	}, [setMenuOpen]);

	const handleDotsBlur = useCallback(() => {
		setMenuOpen(false);
	}, [setMenuOpen]);

	return (
		<>
			<button onClick={handleDotsClick} onBlur={handleDotsBlur} className="dot-icon">
				<img src={Dots} alt="Options" />
			</button>
			{isMenuOpen && <DotMenu />}
		</>
	);
};

export default DotIcon;
