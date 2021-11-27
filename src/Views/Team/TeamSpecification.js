import { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
// import TeamStep from "src/components/Team/TeamStep";
import TeamStep from "../../Components/Team/TeamStep";
const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.secondary.main,
		height: "10%",
		overflow: "overlay",
	},
	teamcontainer: {
		flexDirection: "column",
		width: "100%",
	},
	second_container: {
		width: "70%",
		margin: "0 auto",
		padding: theme.spacing(5),
		// display: 'block',
		// width: '70%',

		[theme.breakpoints.down("lg")]: {},
	},
	table: {
		// width: 1000,
		// marginTop: theme.spacing(4),
		// display: 'flex',
		// flexDirection: 'column',
		// alignItems: 'center'
		margin: "10vw auto",
		width: "70%",
	},
	select: {
		margin: theme.spacing(0, 2, 0),
		padding: theme.spacing(0.5),
		fontSize: 12,
	},
	icons: { display: "inline" },
	iconplus: {
		position: "relative",
		top: "8%",
		left: " 38%",
		cursor: "pointer",
	},
	iconminus: {
		position: "relative",
		top: "8%",
		left: " 41%",

		cursor: "pointer",
	},
	modalc: {
		textAlign: "center",
		marginBottom: "55px",
	},
	appsidebar: {
		flexDirection: "column",
		"& .MuiStack-root": {
			flexDirection: "column",
		},
	},
}));

function createData(name, project, position, authorization) {
	return { name, project, position, authorization };
}

const rows = [
	createData("김직원", " A동 1층 용접 작업", "관리자", "마스터"),
	createData(
		"이직원",
		" A동 1층 용접 작업",
		"감리사",
		"대쉬보드,체크리스트,보고서 수정,보고서 확인"
	),
	createData("양직원", " A동 1층 용접 작업", "용접공", "설정"),
];

const TeamSpecification = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	// const [values, setValues] = useState({
	//   groupName: 'CPS',
	//   projectName: 'Circle',
	//   projectGoal: '',
	//   phone: '',
	//   state: 'Alabama'
	// });

	return (
		<>
			<div className={classes.teamcontainer}>
				<div className={classes.second_container}>
					<TeamStep style={{ width: "70%" }} />
				</div>

				<div className={classes.table}>
					<h5>그룹명</h5>
					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>직원이름</TableCell>
									<TableCell align="right">프로젝트</TableCell>
									<TableCell align="right">직책</TableCell>
									<TableCell align="right" sx={{ textAlign: "center" }}>
										권한
										<div className={classes.icons}>
											<ControlPointIcon
												color="primary"
												sx={{ left: "50%" }}
												className={classes.iconplus}
											/>
											<IndeterminateCheckBoxIcon
												color="secondary"
												className={classes.iconminus}
											/>
										</div>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">{row.project}</TableCell>
										<TableCell align="right">{row.position}</TableCell>
										<TableCell align="right">
											{row.authorization}
											<Button
												type="submit"
												variant="contained"
												className={classes.select}
											>
												권한수정
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		</>
	);
};

export default TeamSpecification;
