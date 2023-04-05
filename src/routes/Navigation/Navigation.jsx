import React from "react";
import { Outlet } from "react-router-dom";
import "./Navigation.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const Navigation = () => {
	return (
		<main className="main-body">
			<NavigationBar />
			<section className="search-section"></section>
			<section className="outlet-section">
				<Outlet />
			</section>
		</main>
	);
};

export default Navigation;
