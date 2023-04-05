import React from "react";
import "./Login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import cloudy from "../../assets/Logo.svg";

const Login = () => {
	return (
		<div className="login-container">
			<img src={cloudy} alt="logo" className="cloudy" />
			<LoginForm />
		</div>
	);
};

export default Login;
