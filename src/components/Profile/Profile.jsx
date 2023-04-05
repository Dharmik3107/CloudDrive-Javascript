import React from "react";
import "./Profile.scss";
import User from "../../assets/User.svg";

const Profile = () => {
	return (
		<button className="profile-container">
			<img src={User} alt="profile" />
		</button>
	);
};

export default Profile;
