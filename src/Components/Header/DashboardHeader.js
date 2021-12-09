import { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Badge, Box, Hidden, IconButton, Toolbar } from "@mui/material";
import history from "../../history";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import InputIcon from "@mui/icons-material/Input";
// import Logo from "./Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
const DashboardHeader = ({ props, onMobileNavOpen, ...rest }) => {
	const [notifications] = useState([]);

	return (
		<AppBar elevation={0} {...rest}>
			<Toolbar>
				<Badge
					color="secondary"
					onClick={() => history.push("/")}
					sx={{ cursor: "pointer" }}
				>
					<HomeIcon />
				</Badge>
				<Box sx={{ flexGrow: 1 }} />
				<Hidden lgDown>
					<IconButton
						color="inherit"
						size="large"
						onClick={() => history.push("/About")}
					>
						<Badge
							badgeContent={notifications.length}
							color="primary"
							variant="dot"
						>
							<AccountCircleIcon />
						</Badge>
					</IconButton>
					<IconButton
						color="inherit"
						size="large"
						onClick={() => history.push("/Account")}
					>
						<Badge
							// badgeContent={notifications.length}
							badgeContent={2}
							color="secondary"
							// variant="dot"
						>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton color="inherit" size="large">
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onMobileNavOpen} size="large">
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

DashboardHeader.propTypes = {
	onMobileNavOpen: PropTypes.func,
};

export default DashboardHeader;
