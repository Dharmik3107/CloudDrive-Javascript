import React, { useEffect, useCallback, useRef } from "react";
import "./DotMenu.scss";
import DotMenuField from "../DotMenuField/DotMenuField";
import { menuIcons } from "./../../assets/Icons";

const DotMenu = () => {
	const dotRef = useRef(null);
	const calculateMenuPosition = useCallback(() => {
		const element = dotRef.current;
		if (element) {
			const dimElem = element.getBoundingClientRect();
			const { right, bottom } = dimElem;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			if (bottom + 250 > windowHeight) {
				element.style.bottom = `40px`;
			} else {
				element.style.top = `40px`;
			}

			if (right + 100 > windowWidth) {
				element.style.right = `${0 + windowWidth - right - 1}px`;
			} else {
				element.style.left = `40px`;
			}
		}
	}, []);

	useEffect(() => {
		calculateMenuPosition();
	}, [calculateMenuPosition]);
	return (
		<div className="dot-menu-container" id="dotMenu" ref={dotRef}>
			{menuIcons.map((element, index) => {
				return <DotMenuField key={index} text={element.title} icon={element.icon} />;
			})}
		</div>
	);
};

export default DotMenu;
