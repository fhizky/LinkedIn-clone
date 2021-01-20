import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import jobIllustration from "./Image/vectorstock_31948683.png";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");

	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector(selectUser);

	const loginToApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profileUrl: userAuth.user.photoURL,
					})
				);
				history.push("/Home");
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					setError("Your password is wrong");
				}
				if (error.code === "auth/user-not-found") {
					setError("Your Email is wrong");
				}
			});
	};

	return (
		<div className="login">
			<nav className="login__navigation">
				<img
					src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
					alt="LinkedIn Logo"
				/>
				<div className="login__navigationMenu">
					<Link to="/register" className="login__link">
						<h4 className="login__joinNow">Join now</h4>
					</Link>
					<button className="login__navigationMenuBtn">Sign in</button>
				</div>
			</nav>

			<div className="login__body">
				<div className="login__bodyLeft">
					<div className="login__title">
						<h1>Welcome to your Professional Community</h1>
					</div>

					{error && (
						<div className="login__error">
							<h4>{error}</h4>
						</div>
					)}

					<form className="login__form">
						<input
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="text"
						/>
						<input
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
						/>
						<Link to="/ForgotPassword" className="login__forgotPassword">
							<p>Forgot password?</p>
						</Link>

						<button
							className="login__formButton"
							type="submit"
							onClick={loginToApp}
						>
							Sign In
						</button>
					</form>
				</div>
				<div className="login__bodyRight">
					<img src={jobIllustration} alt="vektor" />
				</div>
			</div>

			{/* <form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Full name"
				/>
				<input
					value={profileUrl}
					onChange={(e) => setProfileUrl(e.target.value)}
					type="text"
					placeholder="Profile picture URL"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>

			<p>
				Not a member?{" "}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p> */}
		</div>
	);
}

export default Login;
