// import { Container, makeStyles, Typography } from "mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import {
	Bookmark,
	List,
	ExitToApp,
	Home,
	Person,
	PhotoCamera,
	PlayCircleOutline,
	Settings,
	Storefront,
	TabletMac,
} from "@mui/icons-material";

import history from "../../history";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		color: "white",
		paddingTop: theme.spacing(10),
		backgroundColor: theme.palette.primary.main,
		position: "sticky",
		top: 0,
		[theme.breakpoints.down("sm")]: {
			backgroundColor: "white",
			color: "#555",
			border: "1px solid #ece7e7",
		},
		[theme.breakpoints.down("md")]: {
			// display: "none",
		},
	},
	item: {
		display: "flex",
		alignItems: "center",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.up("sm")]: {
			marginBottom: theme.spacing(3),
			cursor: "pointer",
		},
	},
	icon: {
		marginRight: theme.spacing(1),
		[theme.breakpoints.up("sm")]: {
			fontSize: "18px",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: theme.spacing(1),
			fontSize: "25px",
		},
	},
	text: {
		fontWeight: 500,
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
}));

const Drawer = (props) => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<div className={classes.item} onClick={() => history.push("/home")}>
				<Home className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Home
				</Typography>
			</div>
			<div className={classes.item} onClick={() => history.push("/")}>
				<Person className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Login Page
				</Typography>
			</div>
			<div className={classes.item}>
				<List className={classes.icon} />
				<Typography
					className={classes.text}
					variant="h5"
					onClick={() => history.push("/dashboard")}
				>
					Dashboard
				</Typography>
			</div>
			<div className={classes.item}>
				<PhotoCamera className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Camera
				</Typography>
			</div>
			<div className={classes.item}>
				<PlayCircleOutline className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Videos
				</Typography>
			</div>
			<div className={classes.item}>
				<TabletMac className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Apps
				</Typography>
			</div>
			<div className={classes.item}>
				<Bookmark className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Collections
				</Typography>
			</div>
			<div className={classes.item}>
				<Storefront className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Market Place
				</Typography>
			</div>
			<div className={classes.item}>
				<Settings className={classes.icon} />
				<Typography className={classes.text} variant="h5">
					Settings
				</Typography>
			</div>
			<div className={classes.item}>
				<ExitToApp className={classes.icon} variant="h5" />
				<Typography className={classes.text}>Logout</Typography>
			</div>
		</Container>
	);
};

export default Drawer;
