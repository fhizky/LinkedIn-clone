import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function PrivateRoute({ component: Component, ...rest }) {
	const user = useSelector(selectUser);

	return (
		<Route
			{...rest}
			render={(props) => {
				return user ? <Component {...props} /> : <Redirect to="/" />;
			}}
		></Route>
	);
}

export default PrivateRoute;
