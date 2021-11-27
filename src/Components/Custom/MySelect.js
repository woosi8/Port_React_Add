import * as React from "react";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	select: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		// background: theme1.palette.primary.main,
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
	},
	select1: {
		fontSize: 16,
		minWidth: 100,
		background: "white",
		// background: theme1.palette.primary.main,
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		// padding: "0 30px",
	},
}));

export default function MySelect() {
	const TYPE = [
		{
			id: 1,
			name: "유형1",
		},
		{
			id: 2,
			name: "유형2",
		},
		{
			id: 3,
			name: "유형3",
		},
	];
	const [values, setValues] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(e.target);
	};
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h6" gutterBottom component="div">
				유형
			</Typography>
			<Select
				id="types"
				name="category"
				// value="품질기준미준수"
				value={TYPE.name}
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
	);
}
