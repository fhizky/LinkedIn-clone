import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./ForgotPassword.css";

function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	// const passwordReset = (e) => {
	// 	e.preventDefault();
	// 	setMessage("");
	// 	setError("");

	// 	auth
	// 		.sendPasswordResetEmail(email)
	// 		.then(setMessage("Check your email for further instruction"))
	// 		.catch((error) => {
	// 			error && setError("Your Email is invalid");
	// 		});
	// };

	async function passwordReset(e) {
		e.preventDefault();

		try {
			setError("");
			setMessage("");
			await auth.sendPasswordResetEmail(email);
			setMessage("Check your email for further instruction");
		} catch {
			setError("your Email not valid");
		}
	}

	return (
		<div className="forgotPassword">
			<div className="forgotPassword__top">
				<Link exact to="/" className="forgotPassword__link">
					<img
						className="forgotPassword__logo"
						src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
						alt="logo"
					/>
				</Link>
				<h1>Input Email to Reset Password</h1>
			</div>
			<div className="forgotPassword__content">
				{error && <div className="forgotPassword__error">{error}</div>}
				{message && <div className="forgotPassword__success">{message}</div>}
				<form>
					<label>Email</label>
					<input
						className="forgotPassword__contentInput"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
					/>
					<button
						className="forgotPassword__button"
						type="submit"
						onClick={passwordReset}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default ForgotPassword;
