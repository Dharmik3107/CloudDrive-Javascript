import React, { useState } from "react";
import "./LoginForm.scss";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const formDefaultValues = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [formValues, setFormValues] = useState(formDefaultValues);
	const { email, password } = formValues;

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormValues({ ...formValues, [name]: value });
	};

	const handleFormSubmit = () => {};
	return (
		<form onSubmit={handleFormSubmit} className="login-form-container">
			<h1>Login</h1>
			<InputText type="email" name="email" label="Email Address" value={email} onChange={handleChange} />
			<InputText type="password" name="password" label="Password" value={password} onChange={handleChange} />
			<Button type="submit" text="Login" />
			<span className="or-divider">OR</span>
			<Button type="submit" buttonType="google" text="Login with Google" />
			<span>
				Not Registered Yet? <Link to="/register">Register Now</Link>
			</span>
		</form>
	);
};

export default LoginForm;
