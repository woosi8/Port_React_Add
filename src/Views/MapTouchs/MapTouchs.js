import React from "react";
import MapTouch from "Components/MapTouch/MapTouch";
import { makeStyles } from "@mui/styles";

import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	gridWrapper: {
		border: "1px solid grey",
		display: "grid",
		textAlign: "center",
		backgroundColor: "grey",
		gridRowGap: 1,
		gridColumnGap: 1,
		gridTemplateAreas: `
    " a1 a1 "
    " a2 a2 "
    " b1 b2 "
 
    `,
		// gridTemplateColumns: "1fr 1ffr",
		// gridTemplateRows: "2fr 1fr",
		"& > *": {
			backgroundColor: "white",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "10px 0",
		},
	},
	paper: {
		// padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 500,
		// display: "flex",
	},
	bottomRight: {
		justifyContent: "flex-end",
	},
	outerColumn: {
		borderRight: "1px solid grey",
		borderBottom: "1px solid grey",
		borderLeft: "1px solid grey",
	},
	centerColumn: {
		borderBottom: "1px solid grey",
	},
	gridLeft: {
		backgroundColor: "#bfe4ff",
	},
	gridViolation: {
		backgroundColor: "#bfe4ff",
	},
	subtitle: { backgroundColor: "#bfe4ff" },
	thirdtitle: {
		display: "flex",
		width: "30%",
		height: "100%",
		justifyContent: "center",
		fontWeight: "bolder",
	},
}));

const MapTouchs = () => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.gridWrapper}>
					<Typography
						component={"span"}
						style={{ gridArea: "a1", textAlign: "center" }}
						className={classes.subtitle}
					>
						Risk
					</Typography>
					<Typography
						component={"span"}
						style={{
							gridArea: "a2",
							textAlign: "center",
							padding: "3px 0",
						}}
						className={classes.subcontent}
					>
						<span
							style={{
								alignItems: "flex-start",
							}}
							className={classes.thirdtitle}
						>
							심각성
						</span>
						<MapTouch
						// formats={formats}
						//  handleFormat={handleFormat}
						/>
						<span
							style={{
								alignItems: "flex-end",
							}}
							className={classes.thirdtitle}
						>
							빈도
						</span>
					</Typography>

					<Typography
						component={"span"}
						style={{ gridArea: "b1", textAlign: "center" }}
						className={classes.subtitle}
					>
						CPMS <br />
						부적합코드
					</Typography>
					<Typography
						component={"span"}
						style={{ gridArea: "b2", textAlign: "center" }}
						className={classes.subcontent}
					>
						<FormControl sx={{ m: 1 }} style={{ width: "80%" }}>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								name="incompatibility_code"
								// value={incompatibility_code}
								// onChange={handleChange}
								autoWidth
							>
								<MenuItem value="EZ030205">EZ030205</MenuItem>
								<MenuItem value="EZ030206">EZ030206</MenuItem>
								<MenuItem value="EZ030207">EZ030207</MenuItem>
							</Select>
						</FormControl>
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default MapTouchs;
