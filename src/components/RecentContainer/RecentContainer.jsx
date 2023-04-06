import React from "react";
import FileCard from "../AddFileCard/FileCard";
import "./RecentContainer.scss";

const RecentContainer = () => {
	return (
		<div className="recent-cards-container">
			<FileCard
				filelink="https://images.unsplash.com/photo-1679678691006-d8a1484830c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
				filename="testimage.jpg"
			/>
			<FileCard />
			<FileCard />
			<FileCard />
			<FileCard />
			<FileCard />
		</div>
	);
};

export default RecentContainer;
