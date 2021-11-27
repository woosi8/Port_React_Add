import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiFormControl-root": {
			width: "100%",
			marginTop: theme.spacing(2),
		},
	},
}));

export function useForm(initialFValues) {
	const [values, setValues] = useState(initialFValues);
	const [error, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
		console.log(values);
	};

	return {
		values,
		setValues,
		error,
		setErrors,
		handleInputChange,
	};
}

export function Form(props) {
	const classes = useStyles();
	const { children, ...other } = props;
	return (
		<form className={classes.root} autoComplete="off" {...other}>
			{props.children}
		</form>
	);
}
