import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import history from "./history";
import { ThemeProvider } from "@mui/material";
import PrimaryLayout from "./Components/PrimaryLayout/PrimaryLayout";
// import CommonLayout from "./Components/PrimaryLayout/CommonLayout";
import { MainRoute, ChildRoute } from "./Routes/Routes";
import { Theme } from "./Theme/Theme1";

const RouteWithLayout = ({ layout, component, id, korean, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				React.createElement(layout, {
					Views: component,
					id: id,
					korean: korean,
				})
			}
		/>
	);
};

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<Router history={history}>
			<Switch>
				{MainRoute.map((route) => (
					<Route
						key={route.id}
						id={route.id}
						path={route.path}
						exact={route.exact}
						component={route.component}
						korean={route.korean}
						icon={route.icon}

						// layout={PrimaryLayout}
					/>
				))}
				{ChildRoute.map((route) => (
					<RouteWithLayout
						key={route.id}
						layout={PrimaryLayout}
						path={route.path}
						exact={route.exact}
						component={route.component}
						id={route.id}
						korean={route.korean}
					/>
				))}
			</Switch>
		</Router>
	</ThemeProvider>,
	document.getElementById("root")
);
