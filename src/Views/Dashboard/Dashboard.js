import MyButton from "../../Components/Custom/MyButton";
// import MyModal from "../../Components/Custom/MyModal";
// import MySelect from "../../Components/Custom/MySelect";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
	container: {
		// backgroundColor: theme1.palette.primary.main,
		paddingTop: theme.spacing(10),
		paddingLeft: theme.spacing(3),
	},
}));
const Dashboard = ({ history }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<h1>This is Dashboard Page</h1>
			<button type="button" onClick={() => history.push("/Count")}>
				Go to Count Page
			</button>
			<button type="button" onClick={() => history.push("/About")}>
				Go to About Page
			</button>
			<button type="button" onClick={() => history.push("/Contact")}>
				Go to Contact Page
			</button>
			<div className={classes.divide}>
				<MyButton />
				{/* <MySelect /> */}
				{/* <CustomerLists /> */}
			</div>
		</div>
	);
};

export default Dashboard;
