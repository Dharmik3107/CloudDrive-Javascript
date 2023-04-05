import React, { useState } from "react";
import "./SearchBar.scss";
import SearchField from "../SearchField/SearchField";

const SearchBar = () => {
	const [searchString, setSearchString] = useState("");

	return (
		<section className="searchbar-container">
			<SearchField searchString={searchString} setSearchString={setSearchString} />
		</section>
	);
};

export default SearchBar;
