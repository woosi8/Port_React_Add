import {
	Button,
	Container,
	Fab,
	FormControlLabel,
	// FormLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Snackbar,
	TextField,
	Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import MuiAlert from "@mui/lab/Alert";
import Divider from "@mui/material/Divider";

import { Theme1 } from "../Theme/Theme1";
import { useForm, Form } from "../Custom/UserForm";

const useStyles = makeStyles((theme) => ({
	fab: {
		// position: "fixed",
		// bottom: 1,
		// left: 20,
	},
	container: {
		width: 800,
		// height: 550,
		height: "90%",
		backgroundColor: "white",
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: "auto",
		padding: 0,
		[Theme1.breakpoints.down("md")]: {
			width: "80vw",
			// height: "50vh",
		},
		border: "1px solid black",
		borderRadius: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	form: {
		// padding: Theme1.spacing(),
		padding: "0 38px",
		height: "80%",
		overflow: "overlay",
		"&Typography": {
			marginBottom: "0",
		},
		"& .makeStyles-root-25": {
			height: "80%",
		},
	},

	item: {
		marginBottom: Theme1.spacing(1),
		marginTop: Theme1.spacing(1),
		display: "flex",
		alignItems: "center",
	},
	itemBtn: {
		marginBottom: Theme1.spacing(1),
		marginTop: Theme1.spacing(1),
		display: "flex",
		// alignItems: "center",
		justifyContent: "center",
		// position: "absolute",
		// bottom: "3%",
		[Theme1.breakpoints.down("lg")]: {
			// bottom: 25,
			// right: 50,
			// position: "inherit",
		},
		[Theme1.breakpoints.down("md")]: {
			// position: "inherit",
			// position: "absoulte",
		},
	},
	typo: {
		width: "15%",
		marginBottom: "0",
		[Theme1.breakpoints.down("md")]: {
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

// function Alert(props) {
// 	return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const MyModal = () => {
	const TYPE = [
		{
			id: 1,
			name: "품질기준미준수",
		},
		{
			id: 2,
			name: "품질기준미준수2",
		},
		{
			id: 3,
			name: "품질기준미준수3",
		},
	];
	const [values, setValues] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(e.target);
	};
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
				<Container className={classes.container}>
					<Typography
						variant="h3"
						component="h2"
						color="primary"
						className={classes.subtypo}
						sx={{}}
					>
						그룹 생성
					</Typography>
					<Divider />

					<Form className={classes.form} autoComplete="off" type="button">
						<div className={classes.item} style={{ paddingTop: "24px" }}>
							<Typography
								variant="h5"
								gutterBottom
								component="div"
								className={classes.typo}
								// mb={0}
							>
								그룹 이름 :
							</Typography>
							<TextField
								id="standard-basic"
								label="Title"
								size="small"
								style={{ width: "40%" }}
								className={classes.typo}
							/>
						</div>
						<Divider />
						<div className={classes.item}>
							<Typography
								variant="h5"
								gutterBottom
								component="div"
								className={classes.typo}
							>
								그룹 설명 :
							</Typography>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={3}
								// defaultValue="Tell your story..."
								variant="outlined"
								label="Description"
								size="small"
								style={{ width: "80%" }}
							/>
						</div>
						<Divider />
						<div className={classes.item}>
							<Typography
								variant="h5"
								gutterBottom
								component="div"
								className={classes.typo}
							>
								분야 :
							</Typography>
							<TextField select label="Visibility" value="Public">
								<MenuItem value="Public">Public</MenuItem>
								<MenuItem value="Private">Private</MenuItem>
								<MenuItem value="Unlisted">Unlisted</MenuItem>
							</TextField>
						</div>
						<Divider />
						<div className={classes.item}>
							{/* <FormLabel component="legend">Who can comment?</FormLabel> */}
							<Typography
								variant="h5"
								gutterBottom
								component="div"
								className={classes.typo}
							>
								타입 :
							</Typography>
							<RadioGroup sx={{ display: "flex", flexDirection: "row" }}>
								<FormControlLabel
									value="Type1"
									control={<Radio size="small" />}
									label="Type1"
								/>
								<FormControlLabel
									value="Type2"
									control={<Radio size="small" />}
									label="Type2"
								/>
								<FormControlLabel
									value="Type3"
									control={<Radio size="small" />}
									label="Type3"
								/>
							</RadioGroup>
						</div>
						<Divider />
						<div className={classes.item}>
							<Typography
								variant="h5"
								gutterBottom
								component="div"
								className={classes.typo}
							>
								유형 :
							</Typography>
							<Select
								id="types"
								name="category"
								value="품질기준미준수"
								// value={category}
								onChange={handleChange}
								defaultValue="category"
								className={classes.select1}
							>
								{TYPE.map((type) => (
									<MenuItem key={type.id} value={type.name}>
										{type.name}
									</MenuItem>
								))}
							</Select>
						</div>
						<Divider />

						<Divider />
					</Form>
					<div className={classes.itemBtn}>
						<Button
							variant="outlined"
							color="primary"
							style={{ marginRight: 20 }}
							onClick={() => setOpen(false)}
							type="button"
						>
							Create
						</Button>
						<Button
							variant="outlined"
							color="warning"
							onClick={() => setOpen(false)}
							type="button"
						>
							Cancel
						</Button>
					</div>
				</Container>
			</Modal>
			<Snackbar
				open={openAlert}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				{/* <Alert onClose={handleClose} severity="success">
					This is a success message!
				</Alert> */}
			</Snackbar>
		</>
	);
};

export default MyModal;
