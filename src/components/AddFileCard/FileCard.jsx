import React, { useState, useCallback } from "react";
import "./FileCard.scss";
import Dots from "../../assets/Dots.svg";
import DotMenu from "../DotMenu/DotMenu";
import DotIcon from "../DotIcon/DotIcon";

const FileCard = ({ filelink, filename }) => {
	// const [isMenuOpen, setMenuOpen] = useState(false);

	// const handleDotsClick = useCallback(() => {
	// 	setMenuOpen((isMenuOpen) => !isMenuOpen);
	// }, [setMenuOpen]);

	// const handleDotsBlur = useCallback(() => {
	// 	setMenuOpen(false);
	// }, [setMenuOpen]);

	return (
		<div className="add-file-card-container">
			<div className="image-container" style={{ backgroundImage: `url(${filelink})` }}></div>
			<div className="filename-container">
				<p>{filename}</p>
				<DotIcon />
			</div>
			{/* {isMenuOpen && <DotMenu />} */}
		</div>
	);
};

export default FileCard;
