import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Register.scss";
import cloudy from "../../assets/Logo.svg";

const Register = () => {
	return (
		<div className="register-container">
			<img src={cloudy} alt="logo" className="cloudy" />
			<RegisterForm />
		</div>
	);
};

export default Register;
