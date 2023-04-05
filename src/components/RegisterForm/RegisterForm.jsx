import React, { useState } from "react";
import InputText from "../InputText/InputText";
import "./RegisterForm.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const formDefaultValues = {
	email: "",
	password: "",
	confirmPassword: "",
};

const RegisterForm = () => {
	const [formValues, setFormValues] = useState(formDefaultValues);
	const { email, password, confirmPassword } = formValues;

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormValues({ ...formValues, [name]: value });
	};

	const handleFormSubmit = () => {};
	return (
		<form onSubmit={handleFormSubmit} className="register-form-container">
			<h1>Register</h1>
			<InputText type="email" name="email" label="Email Address" value={email} onChange={handleChange} />
			<InputText type="password" name="password" label="Password" value={password} onChange={handleChange} />
			<InputText type="password" name="confirmPassword" label="Confirm Password" value={confirmPassword} onChange={handleChange} />
			<Button type="submit" text="Register" />
			<span className="or-divider">OR</span>
			<Button type="submit" buttonType="google" text="Login with Google" />
			<span>
				Already Registered? <Link to="/login">Login Now</Link>
			</span>
		</form>
	);
};

export default RegisterForm;
