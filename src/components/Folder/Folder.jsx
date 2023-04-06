import React from "react";
import "./Folder.scss";
import FolderIcon from "../../assets/Folder.svg";
import Dots from "../../assets/Dots.svg";
import DotIcon from "../DotIcon/DotIcon";

const Folder = () => {
	return (
		<div className="folder">
			<div className="name-container">
				<img src={FolderIcon} alt="Folder Icon" />
				<p>Foldername</p>
			</div>
			<DotIcon />
		</div>
	);
};

export default Folder;
