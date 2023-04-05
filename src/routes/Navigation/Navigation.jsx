import React from "react";
import { Outlet } from "react-router-dom";
import "./Navigation.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Navigation = () => {
	return (
		<main className="main-body">
			<NavigationBar />
			<SearchBar />
			<section className="outlet-section">
				<Outlet />
			</section>
		</main>
	);
};

export default Navigation;
