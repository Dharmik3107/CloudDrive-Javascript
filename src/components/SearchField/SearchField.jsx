import React, { useRef, useState } from "react";
import "./SearchField.scss";
import Back from "../../assets/Back.svg";
import Close from "../../assets/Close.svg";
import Search from "../../assets/Search.svg";
import Profile from "../Profile/Profile";

const SearchField = ({ searchString, setSearchString, ...otherProps }) => {
	const [isFocused, setFocused] = useState(false);
	const [isTyped, setTyped] = useState(false);
	const searchRef = useRef(null);

	const handleFocus = () => {
		searchRef.current.focus();
		setFocused(true);
	};

	const handleClick = () => {
		setFocused(false);
		setSearchString("");
		setTyped(false);
	};

	const handleChange = (event) => {
		setSearchString(event.target.value);
		setTyped(event.target.value.length > 0);
	};

	return (
		<div className="search-container">
			<label htmlFor="search" onClick={handleFocus} className={isTyped || isFocused ? "hide" : ""}>
				Type here to search...
			</label>
			<input
				ref={searchRef}
				type="text"
				name="search"
				className="search-field"
				value={searchString}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={() => setFocused(false)}
				{...otherProps}
			/>
			{isFocused && (
				<button className="back-arrow-container" onClick={handleClick}>
					<img src={Back} alt="Back Arrow" />
				</button>
			)}
			{!isFocused && (
				<button className="search-arrow-container" onClick={handleClick}>
					<img src={Search} alt="Search" />
				</button>
			)}
			{isTyped && (
				<button className="close-button" onClick={handleClick}>
					<img src={Close} alt="Close" />
				</button>
			)}
			<Profile />
		</div>
	);
};

export default SearchField;
