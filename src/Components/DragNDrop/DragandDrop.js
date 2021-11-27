import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
// import TeamModal from "src/components/Team/TeamModal";
// import { Cards } from "src/components/Card/Card";
import TeamModal from "../../Components/Team/TeamModal";
import { Cards } from "../../Components/Team/Cards";
import axios from "axios";
// import Cards from "../../Components/Team/Cards";
const useStyles = makeStyles((theme) => ({
	container: {
		// backgroundColor: theme1.palette.primary.main,
		// paddingTop: theme.spacing(16),
		// paddingLeft: theme.spacing(3),
		"&MuiGrid-root": {},
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {},
	},
	grids: {
		marginBottom: "55px",
		// textAlign: "center",
	},
	modalc: {
		textAlign: "center",
		marginBottom: "55px",
	},
}));
const DragDrops = ({ history }) => {
	// const [toggleDrawer, setToggleDrawer] = useState(false);
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const [msg, setMsg] = useState([]);

	useEffect(() => {
		getMessages();
	}, [msg]);

	const getMessages = () => {
		axios
			.get("/get_messages/")
			.then(function (response) {
				// console.log(response.data.result);
				let data = response.data.result;
				setMsg(data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<div className={classes.container}>
				<Grid container sx={{ alignItems: "center" }} spacing={3}>
					<Grid item md={4} sm={6} xs={2} className={classes.modalc}>
						<TeamModal />
					</Grid>

					{msg.map((row) => (
						<Grid
							item
							key={row.ID}
							md={4}
							sm={6}
							xs={10}
							className={classes.grids}
						>
							<Cards row={row} />
						</Grid>
					))}
				</Grid>
				{/* <Divider /> */}
			</div>
		</>
	);
};

export default DragDrops;
