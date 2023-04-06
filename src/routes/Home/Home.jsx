import React from "react";
import "./Home.scss";
import FileCard from "../../components/AddFileCard/FileCard";
import RecentContainer from "../../components/RecentContainer/RecentContainer";
import FoldersContainer from "../../components/FoldersContainer/FoldersContainer";
import FilesContainer from "../../components/FilesContainer/FilesContainer";

const Home = () => {
	return (
		<div className="home-container">
			<h1 className="page-heading-drive">My Drive</h1>
			<h5 className="category-heading">Recently Added</h5>
			<RecentContainer />
			<h5 className="category-heading">Folders</h5>
			<FoldersContainer />
			<h5 className="category-heading">Files</h5>
			<FilesContainer />
		</div>
	);
};

export default Home;
