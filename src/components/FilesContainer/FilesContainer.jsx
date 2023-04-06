import React from "react";
import "./FilesContainer.scss";
import FileCard from "../AddFileCard/FileCard";

const FilesContainer = () => {
	return (
		<div className="files-container">
			<FileCard />
			<FileCard />
			<FileCard />
			<FileCard />
			<FileCard />
			<FileCard />
			<FileCard />
		</div>
	);
};

export default FilesContainer;
