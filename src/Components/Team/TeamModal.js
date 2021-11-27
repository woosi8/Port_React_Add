import { Container, Fab, Modal, Snackbar, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import MuiAlert from "@mui/lab/Alert";
import { Theme } from "../../Theme/Theme1";
import { styled } from "@mui/material";

import TeamCreate from "./TeamCreate";

const useStyles = makeStyles((theme) => ({
	fab: {
		// position: "fixed",
		// bottom: 1,
		// left: 20,
	},
	container: {
		paddingLeft: "0 !important",
		paddingRight: "0 !important",
		height: "80%",
		width: 950,
		maxWidth: "950px !important",
		// height: 550,
		// height: "72vh",
		backgroundColor: "white",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: "auto",
		padding: 0,
		[Theme.breakpoints.up("lg")]: {
			height: "55vh",
		},
		[Theme.breakpoints.down("md")]: {
			width: "80vw",
			height: "45vh",
		},

		border: "1px solid black",
		borderRadius: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	form: {
		// padding: Theme.spacing(),
		padding: "0 38px",
		height: "80%",
		overflow: "overlay",
		"&Typography": {
			marginBottom: "0",
		},
	},
	item: {
		marginBottom: Theme.spacing(1),
		marginTop: Theme.spacing(1),
		display: "flex",
		alignItems: "center",
	},
	itemBtn: {
		marginBottom: Theme.spacing(1),
		marginTop: Theme.spacing(1),
		display: "flex",
		// alignItems: "center",
		justifyContent: "center",
		// position: "absolute",
		// bottom: "3%",
		[Theme.breakpoints.down("lg")]: {
			// bottom: 25,
			// right: 50,
			// position: "inherit",
		},
		[Theme.breakpoints.down("md")]: {
			// position: "inherit",
			// position: "absoulte",
		},
	},
	typo: {
		width: "15%",
		marginBottom: "0",
		[Theme.breakpoints.down("md")]: {
			width: "20%",
		},
	},
	subtypo: {
		backgroundColor: "#b2ebf2",
		padding: "15px 10px",
		textAlign: "center",
		borderTopLeftRadius: "10px",
		borderTopRightRadius: "10px",
	},
}));
const MyContainer = styled(Container)({
	// paddingLeft: "0 !important",
	// paddingRight: "0 !important",
	"&.MuiContainer-root": {
		padding: 0,
		maxWidth: "950px",
	},
	height: "80%",
	width: 950,
	// height: 550,
	// height: "72vh",
	backgroundColor: "white",
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	margin: "auto",
	padding: 0,
	[Theme.breakpoints.up("lg")]: {
		height: "55vh",
	},
	[Theme.breakpoints.down("md")]: {
		width: "80vw",
		height: "45vh",
	},

	border: "1px solid black",
	borderRadius: "10px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
});

const TeamModal = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
		setOpenAlert(false);
	};
	return (
		<>
			<Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
				<Fab color="primary" className={classes.fab}>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal open={open} onClose={handleClose}>
				<MyContainer>
					<TeamCreate open={open} />
				</MyContainer>
			</Modal>
			<Snackbar
				open={openAlert}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			></Snackbar>
		</>
	);
};

export default TeamModal;
