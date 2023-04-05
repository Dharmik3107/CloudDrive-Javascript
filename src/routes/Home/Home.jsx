import React from "react";
import "./Home.scss";
import FileCard from "../../components/AddFileCard/FileCard";

const Home = () => {
	return (
		<div className="home-container">
			<h1 className="page-heading-drive">My Drive</h1>
			<h5 className="category-heading">Recently Added</h5>
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
		</div>
	);
};

export default Home;
