import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Register.css";

function Register() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [profileUrl, setProfileUrl] = useState();
	const dispatch = useDispatch();

	const history = useHistory();

	const register = (e) => {
		e.preventDefault();

		if (!name) {
			return alert("Please enter your Fullname");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) =>
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profileUrl,
					})
					.then(() => {
						//dispatch data to redux
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profileUrl,
							})
						);
						history.push("/Home");
					})
			)
			.catch((error) => alert(error));
	};

	return (
		<div className="register">
			<div className="register__top">
				<Link exact to="/" className="register__link">
					<img
						className="register__logo"
						src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
						alt="logo"
					/>
				</Link>
				<h1>Make the most yout professional life</h1>
			</div>
			<div className="register__content">
				<form>
					<label>Name</label>
					<input
						className="register__contentInput"
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
					/>
					<label>Profile URL "(optional)"</label>
					<input
						className="register__contentInput"
						value={profileUrl}
						onChange={(e) => setProfileUrl(e.target.value)}
						type="text"
					/>
					<label>Email</label>
					<input
						className="register__contentInput"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
					/>
					<label>Password</label>
					<input
						className="register__contentInput"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>

					<p className="register__agreement">
						By clickking Agree & Join, you agree to the LinkedIn{" "}
						<span>User Agreement</span>, <span>Privacy Policy</span>, and{" "}
						<span>Cookie Policy</span>
					</p>
					<button className="register__button" type="submit" onClick={register}>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
