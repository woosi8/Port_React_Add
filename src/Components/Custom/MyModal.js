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
	PageContainer,
	FormLabel,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import MuiAlert from "@mui/lab/Alert";
import Divider from "@mui/material/Divider";
import { Theme } from "../../Theme/Theme1";
import { useForm, Form } from "../Custom/UserForm";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";

const Teams = [
	{
		id: "eric",
		label: "Eric",
	},
	{
		id: "joao",
		label: "Joao",
	},
	{
		id: "tushly",
		label: "Tushly",
	},
	{
		id: "pnaji",
		label: "Pnaji",
	},
];

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
		overflow: "overlay",
		[Theme.breakpoints.down("md")]: {
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
		// padding: Theme.spacing(),
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
	const [values, setValues] = useState({
		group_name: "",
		type: "",
		project: "",
		description: "",
		users: "",
		numbers: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(e.target.value);
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

					<Container
						title="Customer Edit"
						description="this is Customer Edit page"
					>
						<Breadcrumbs title="Edit page" subtitle="Customer" />
						<Grid container spacing={0}>
							{/* <Grid item lg={4} md={12} xs={12}>
								<Card sx={{ p: 3 }}>
									<Typography variant="h2" sx={{ mt: 1 }}>
										Nirav Joshi
									</Typography>
									<Typography variant="body2">FullStack Developer</Typography>
									<Typography
										variant="h6"
										fontWeight="600"
										sx={{ mt: 3, mb: 1 }}
									>
										Address
									</Typography>
									<Typography variant="body2">
										11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New
										York, USA
									</Typography>
									<Button color="error" variant="contained" sx={{ mt: 3 }}>
										Delete Account
									</Button>
								</Card>
							</Grid> */}
							<Grid item lg={12} md={12} xs={12}>
								<Card sx={{ p: 3 }}>
									<Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
										Edit Details
									</Typography>
									<form>
										<FormLabel htmlFor="Group_name">Group_name</FormLabel>
										<TextField
											id="group_name"
											name="group_name"
											value={values.group_name}
											onChange={handleChange}
											variant="outlined"
											fullWidth
											size="small"
											sx={{ mb: 2 }}
										/>

										<FormLabel htmlFor="Type">Type</FormLabel>
										<TextField
											id="type"
											name="type"
											value={values.type}
											onChange={handleChange}
											variant="outlined"
											fullWidth
											size="small"
											sx={{ mb: 2 }}
										/>

										<FormLabel htmlFor="project">Project Name</FormLabel>
										<TextField
											id="project"
											name="project"
											value={values.project}
											onChange={handleChange}
											variant="outlined"
											fullWidth
											size="small"
											sx={{ mb: 2 }}
										/>

										<FormLabel htmlFor="project-details">
											Project Description
										</FormLabel>
										<TextField
											id="description"
											name="description"
											value={values.description}
											onChange={handleChange}
											variant="outlined"
											multiline
											rows={4}
											fullWidth
											size="small"
											sx={{ mb: 2 }}
										/>

										<FormLabel>Users</FormLabel>

										<Autocomplete
											multiple
											id="tags-outlined"
											options={Teams}
											getOptionLabel={(option) => option.label}
											filterSelectedOptions
											renderInput={(params) => (
												<TextField
													id="users"
													name="users"
													value={values.users}
													onChange={handleChange}
													{...params}
													placeholder="users"
													size="small"
													aria-label="users"
													sx={{
														mb: 3,
													}}
												/>
											)}
										/>
										<FormLabel htmlFor="week">Week</FormLabel>
										<TextField
											id="numbers"
											name="numbers"
											value={values.numbers}
											onChange={handleChange}
											variant="outlined"
											fullWidth
											size="small"
											sx={{ mb: 2 }}
										/>

										{/* <Button color="primary" variant="contained">
											Update
										</Button>
										<Button color="primary" variant="contained">
											Cancel
										</Button> */}
									</form>
								</Card>
							</Grid>
						</Grid>
					</Container>
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
