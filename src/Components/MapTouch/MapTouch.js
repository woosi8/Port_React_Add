import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	"& .MuiToggleButtonGroup-grouped": {
		borderRadius: 0,
		border: "1px solid black",

		"&.MuiToggleButtonGroup-groupedHorizontal:not(:first-of-type)": {
			marginLeft: 0,
			borderLeft: "1px solid black",
		},
		"&.Mui-selected": {
			background:
				"  radial-gradient(circle, rgba(151,152,158,1) 0%, rgba(73,90,166,1) 0%)",
			border: "1px solid black",
			opacity: "0.9",
		},
	},
}));
const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
	"&:hover": {
		backgroundColor: "",
	},
	"&.Mui-selected": {
		"&:hover": {
			background:
				"  radial-gradient(circle, rgba(151,152,158,1) 0%, rgba(73,90,166,1) 0%)",
			opacity: "0.9",
		},
	},
}));

const useStyles = makeStyles((theme) => ({
	mainToggle: {
		display: "block",
		width: "100%",
		margin: "0",
		borderRadius: "0",
	},
	yellow: {
		width: "23.3%",
		height: "5rem",
		border: "1px solid black",
		background:
			"linear-gradient(0deg, rgba(239,246,125,1) 5%, rgba(255,248,0,1) 25%)",
		margin: "0",
	},
	red: {
		width: "23.3%",
		height: "5rem",
		border: "1px solid black",
		background:
			"linear-gradient(0deg, rgba(240,81,79,1) 3%, rgba(232,34,38,1) 17%)",
		margin: "0",
	},
	green: {
		width: "23.3%",
		height: "5rem",
		border: "1px solid black",
		background:
			"linear-gradient(0deg, rgba(108,223,53,1) 12%, rgba(56,215,34,1) 28%)",
		// background: "#43e97b",
		margin: "0",
	},
	toggles: { width: "23.3%", height: "5rem", border: "1px solid black" },
}));

export default function MapTouch({}) {
	const classes = useStyles();
	const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};

	return (
		<div className="App">
			<StyledToggleButtonGroup
				value={formats}
				onChange={handleFormat}
				className={classes.mainToggle}
				// color="primary"
			>
				<StyledToggleButton
					name="risk"
					value="1"
					className={classes.yellow}
					sx={{
						background: "pink",
					}}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="2"
					className={classes.red}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="3"
					className={classes.red}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="4"
					className={classes.red}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="5"
					className={classes.green}
					sx={{
						background: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
					}}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="6"
					className={classes.yellow}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="7"
					className={classes.red}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="8"
					className={classes.red}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="9"
					className={classes.green}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="10"
					className={classes.yellow}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="11"
					className={classes.yellow}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="12"
					className={classes.red}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="13"
					className={classes.green}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="14"
					className={classes.green}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="15"
					className={classes.green}
				></StyledToggleButton>
				<StyledToggleButton
					name="risk"
					value="16"
					className={classes.yellow}
				></StyledToggleButton>
			</StyledToggleButtonGroup>
		</div>
	);
}
