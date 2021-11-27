import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Stack } from "@mui/material";
import history from "../../history";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import Drawers from "../Drawer/Drawers";
import { makeStyles } from "@mui/styles";
import Badge from "@mui/material/Badge";
import { NotificationAdd } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import HomeIcon from "@mui/icons-material/Home";
// import { Button } from "@mui/material";
// import history from "../../history";

const useStyles = makeStyles((theme) => ({
	center: {
		display: "flex",
		alignItems: "center",
		position: "absolute",
		left: "50%",
		transform: "translate(-50%,0)",

		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		// "&:hover": {
		// 	backgroundColor: alpha(theme.palette.common.white, 0.25),
		// },
		borderRadius: theme.shape.borderRadius,
		// width: "50%",
		[theme.breakpoints.down("sm")]: {
			display: (props) => (props.open ? "flex" : "none"),
			width: "70%",
		},
	},
	left: {
		display: "flex",
		alignItems: "center",
		position: "absolute",
		left: "10%",
		transform: "translate(-10%,0)",
	},
	icons: {
		display: "flex",
		alignItems: "center",
		position: "absolute",
		left: "99%",
		transform: "translate(-99%,0)",
	},
	badge: {
		marginRight: theme.spacing(2),
		cursor: "pointer",
		"&:hover": {
			zIndex: "modal",
			color: "secondary",
		},
	},
	respon: {
		"& .MuiDrawer-paper": {
			width: "15vw",
		},
		[theme.breakpoints.down("md")]: {
			"& .MuiDrawer-paper": {
				width: "87px",
			},
		},
		[theme.breakpoints.up("lg")]: {
			"& .MuiDrawer-paper": {
				width: "13vw",
			},
		},
	},
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: "94vw",

		marginLeft: "20vw",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
	backgroundColor: theme.palette.primary.main,
	color: "#0000",
	borderRight: "0",
}));

export default function Header(props) {
	const theme = useTheme();
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					{/* <div className={classes.left}>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={() => history.push("/register")}
						>
							<HomeIcon />
						</Button>
					</div> */}

					<div className={classes.center}>
						<Stack direction="column" textAlign="center">
							<Typography
								variant="h5"
								noWrap
								component="div"
								// className={classes.center}
							>
								CPS
							</Typography>
							<Typography variant="caption" noWrap component="div">
								{props.korean}
							</Typography>
						</Stack>
					</div>
					<div className={classes.icons}>
						<Badge
							color="secondary"
							badgeContent={2}
							className={classes.badge}
							onClick={() => history.push("/About")}
						>
							<AccountCircleIcon fontSize="large" />
						</Badge>
						<Badge color="secondary" badgeContent={4} className={classes.badge}>
							<MailIcon fontSize="large" />
						</Badge>
						<Badge color="secondary" badgeContent={2} className={classes.badge}>
							<NotificationAdd fontSize="large" />
						</Badge>
					</div>
				</Toolbar>
			</AppBar>

			<Drawer
				sx={{
					// width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						// width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
				className={classes.respon}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose} sx={{ color: "#fff" }}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				{/* <Divider /> */}
				<Drawers />
			</Drawer>
		</Box>
	);
}
