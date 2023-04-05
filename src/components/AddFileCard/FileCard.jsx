import React from "react";
import "./FileCard.scss";

const FileCard = ({ filelink, filename }) => {
	return (
		<div className="add-file-card-container">
			<div className="image-container" style={{ backgroundImage: `url(${filelink})` }}></div>
			<div className="filename-container">
				<p>{filename}</p>
			</div>
		</div>
	);
};

export default FileCard;
