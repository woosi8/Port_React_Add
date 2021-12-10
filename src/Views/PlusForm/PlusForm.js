import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import {
	Button,
	TextField,
	Grid,
	Container,
	Typography,
	CssBaseline,
	Box,
	Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { Add, Remove } from "@material-ui/icons";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
// import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		maxWidth: 600,
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(0, 0, 2),
		padding: theme.spacing(1.5),
	},
	select: {
		fontSize: 16,
		width: 100,
	},
	result: {
		width: 600,
		border: "1px solid #eaeaea",
		backgroundColor: "#eaeaea",
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	modalContent: {
		width: 400,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	table: {
		width: "100%",
		// marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	pm10: {
		minWidth: 10,
		width: 22,
		padding: 0,
		marginRight: 3,
		backgroundColor: "#7d8ce3",
	},
	pm: {
		minWidth: 10,
		width: 22,
		padding: 0,
		marginRight: 3,
	},
	btnbox: {
		display: "flex ",
		justifyContent: "space-between",
	},
	btnpaper: {
		paddingLeft: 12,
		paddingRight: 12,
		fontSize: 18,
	},
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
const mg = "김부장";

export default function PlusForm() {
	const classes = useStyles();
	const history = useHistory();
	const [totalNum, setTotalnum] = useState(33);
	const [recruitment, setRecruitment] = useState(1);

	return (
		<>
			<Container component="main" maxWidth="">
				<CssBaseline />
				<div className={classes.paper}>
					<h1 color="primary">부서명</h1>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<Typography componet="h2" variant="h5" gutterBottom>
									부서정보
								</Typography>
								<TextField
									// name="password"
									// id="password"
									// variant="outlined"
									// label=""
									// autoFocus
									multiline
									fullWidth
									defaultValue={message}
									rows={3}
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Typography componet="h2" variant="h5" gutterBottom>
									부서담당자
								</Typography>
								<TextField fullWidth defaultValue={mg} rows={3} />
							</Grid>
							<Grid item xs={12} sm={12}>
								<Typography componet="h2" variant="h5" gutterBottom>
									인원수
								</Typography>
								<Box
									// className="flex-container"
									className={classes.btnbox}
								>
									{totalNum}

									<Box>
										<Button
											data-testid="incrementAway"
											onClick={() => setTotalnum(totalNum - 10)}
											variant="contained"
											color="primary"
											className={classes.pm10}
										>
											{/* <Add /> */}
											<FastRewindIcon />
										</Button>
										<Button
											data-testid="decrementAway"
											onClick={() => setTotalnum(totalNum - 1)}
											variant="contained"
											color="primary"
											className={classes.pm}
										>
											<RemoveIcon />
										</Button>
										<Button
											data-testid="incrementAway"
											onClick={() => setTotalnum(totalNum + 1)}
											variant="contained"
											color="primary"
											className={classes.pm}
										>
											<AddIcon />
										</Button>

										<Button
											data-testid="decrementAway"
											onClick={() => setTotalnum(totalNum + 10)}
											variant="contained"
											color="primary"
											className={classes.pm10}
										>
											<FastForwardIcon />
										</Button>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Typography componet="h2" variant="h5" gutterBottom>
									채용예정인원
								</Typography>
								<Box className={classes.btnbox}>
									{recruitment}
									<Box>
										<Button
											data-testid="incrementAway"
											onClick={() => setRecruitment(recruitment - 10)}
											variant="contained"
											color="primary"
											className={classes.pm10}
										>
											<FastRewindIcon />
										</Button>
										<Button
											data-testid="decrementAway"
											onClick={() => setRecruitment(recruitment - 1)}
											variant="contained"
											color="primary"
											className={classes.pm}
										>
											<RemoveIcon />
										</Button>
										<Button
											data-testid="incrementAway"
											onClick={() => setRecruitment(recruitment + 1)}
											variant="contained"
											color="primary"
											className={classes.pm}
										>
											<AddIcon />
										</Button>

										<Button
											data-testid="decrementAway"
											onClick={() => setRecruitment(recruitment + 10)}
											variant="contained"
											color="primary"
											className={classes.pm10}
										>
											<FastForwardIcon />
										</Button>
									</Box>
								</Box>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							// onClick={() => history.push("/authority")}
							style={{ marginTop: 20 }}
						>
							수정하기
						</Button>
					</form>
				</div>
			</Container>
		</>
	);
}
