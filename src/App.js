import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import Register from "./Register";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	// const PrivateRoute = ({ component: Component, ...rest }) => {
	// 	return (
	// 		<Route
	// 			{...rest}
	// 			render={(props) => {
	// 				return user ? <Component {...props} /> : <Redirect to="/" />;
	// 			}}
	// 		></Route>
	// 	);
	// };

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//user is logged In
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoURL: userAuth.photoURL,
					})
				);
			} else {
				//user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return (
		// <Router>
		// 	<Switch>
		// 		<div className="app">
		// 			{!user ? (
		// 				<Route path="/" component={Login} />
		// 			) : (
		// 				<Route path="/Home" component={Home} />
		// 				<Route path="/register" component={Register} />
		// 			)}
		// 		</div>
		// 	</Switch>
		// </Router>
		<Router>
			<Switch>
				<PrivateRoute path="/Home" component={Home} />
				<Route path="/register" component={Register} />
				<Route exact path="/" component={Login} />
				<Route path="/forgotPassword" component={ForgotPassword} />
			</Switch>
		</Router>
	);
}

export default App;
