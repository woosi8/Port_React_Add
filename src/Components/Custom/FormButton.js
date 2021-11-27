import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function FormButton(props) {
	const { className, variant, text, color, fullWidth, ...others } = props;
	const classes = useStyles();

	return (
		<>
			<Button
				className={classes.button}
				variant={variant}
				size="large"
				fullWidth
				color={color}
				{...others}
			>
				{text}
			</Button>
		</>
	);
}
