import { useState } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Stack,
	TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { Navigate } from "react-router-dom";

// import TeamInvitation from './TeamInvitation';

const useStyles = makeStyles((theme) => ({
	btn: {
		margin: 0,
		color: "secondary",
		position: "absolute",
		"& .makeStyles-button-21": { margin: 0, color: "secondary" },
	},
	container: {
		height: "100%",
	},
	cardContainer: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		overflow: "overlay",
	},
	cardHeader: {
		fontWeight: "bold",
		padding: theme.spacing(4),
		backgroundColor: theme.palette.primary.main,
		color: "#fff ",
		textAlign: "center",
	},
}));

const emails = ["username@gmail.com", "user02@gmail.com"];

const TeamCreate = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(emails[1]);
	const [values2, setValues2] = useState({ comment: "" });
	const [counterMeasures, setCounterMeasures] = useState([]);

	////// text add
	const handleChangeCounterMeasure = (e) => {
		const { name, value } = e.target;
		setValues2({ ...values, [name]: value });
		console.log(values2);
	};
	const handleKeyPress2 = (e) => {
		if (e.key === "Enter") {
			handleAddCounterMeasure();
		}
	};
	const handleAddCounterMeasure = () => {
		setCounterMeasures((oldArray) => [...oldArray, values2]);
		setValues2({ comment: "" });
	};
	const handleDeleteCounterMeasure = (index) => {
		setCounterMeasures(counterMeasures.filter((item, i) => i !== index));
	};
	////////////
	// const handleClose = (value) => {
	//   setOpen(false);
	//   setSelectedValue(value);
	//   console.log(selectedValue);
	//   console.log(open);
	// };
	const initialFormState = {
		ID: null,
		groupname: "",
		projectname: "",
		projectgoal: "",
	};
	const [values, setValues] = useState(initialFormState);

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
		console.log(values);
	};

	const handleSubmit = () => {
		setOpen(false);

		axios
			.post("/create_message/", {
				groupname: values.groupname,
				projectname: values.projectname,
				projectgoal: values.projectgoal,
			})
			.then(function (response) {
				console.log(response);
				// setValues(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<form autoComplete="off" noValidate {...props} style={{ height: "100%" }}>
			<Card className={classes.cardContainer}>
				<CardHeader
					title="그룹을 생성 해 주세요 "
					className={classes.cardHeader}
				/>
				<Divider />
				<CardContent
					sx={{ height: "100%", padding: "3vw", overflow: "overlay" }}
				>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Group name"
								name="groupname"
								onChange={handleChange}
								required
								value={values.groupname}
								variant="outlined"
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Project name"
								name="projectname"
								onChange={handleChange}
								required
								value={values.projectname}
								variant="outlined"
							/>
						</Grid>
						<Grid item md={12} xs={12}>
							<TextField
								fullWidth
								label="Project Goal"
								name="projectgoal"
								onChange={handleChange}
								required
								value={values.projectgoal}
								variant="outlined"
								multiline
								maxRows={4}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Group Code"
								name="code"
								onChange={handleChange}
								// type="number"
								value={values.code}
								variant="outlined"
								disabled
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								placeholder="직책생성"
								id="fullWidth"
								name="comment"
								value={values2.comment}
								onChange={handleChangeCounterMeasure}
								onKeyPress={handleKeyPress2}
								variant="outlined"
								InputProps={{
									endAdornment: (
										<IconButton
											color="default"
											aria-label="add comment"
											edge="end"
											onClick={handleAddCounterMeasure}
										>
											<NoteAddIcon />
										</IconButton>
									),
								}}
							/>
							<Stack direction="column">
								{counterMeasures.map((counterMeasure, index) => (
									<Grid
										container
										key={index}
										justifyContent="space-between"
										alignItems="center"
									>
										<Grid item xs={10}>
											<Typography
												component="div"
												style={{
													gridArea: "b1",
													textAlign: "left",
													display: "flex",
													justifyContent: "flex-start",
													padding: "3px 10px",
													wordBreak: "break-all",
												}}
												className={classes.subcontent1}
											>
												<ArrowRightIcon />
												{counterMeasure.comment}
											</Typography>
										</Grid>
										<Grid item xs={2}>
											<IconButton
												color="default"
												aria-label="delete comment"
												onClick={() => handleDeleteCounterMeasure(index)}
											>
												<ClearIcon />
											</IconButton>
										</Grid>
									</Grid>
								))}
							</Stack>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						p: 2,
					}}
				>
					{/* <RouterLink to="/app/team/" style={{ textDecoration: 'none' }}> */}
					{/* <Navigate to="/app/team/dashboard"> */}
					<Button color="primary" variant="contained" onClick={handleSubmit}>
						CREATE
					</Button>
					{/* </Navigate> */}
					{/* </RouterLink> */}
				</Box>
				{/* <TeamInvitation
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        /> */}
			</Card>
		</form>
	);
};

export default TeamCreate;
