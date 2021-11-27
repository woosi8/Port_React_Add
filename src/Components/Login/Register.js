import { CssBaseline, Container } from "@mui/material";
import { useForm, Form } from "../Custom/UserForm";
import FormButton from "../Custom/FormButton";
import Input from "../Custom/Input";
import { makeStyles } from "@mui/styles";
import history from "../../history";
import request from "../../axios";
const useStyles = makeStyles((theme) => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const initialValues = {
	id: 0,
	user_id: "",
	password: "",
	passwordConfirm: "",
	username: "",
	email: "",
};

export default function RegisterComponent(props) {
	const classes = useStyles();

	const validate = () => {
		let temp = {};
		temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
		temp.passwordConfirm =
			values.password === values.passwordConfirm ? "" : "check your password.";
		setErrors({
			...temp,
		});

		return Object.values(temp).every((x) => x === "");
	};

	const { values, error, setErrors, handleInputChange } =
		useForm(initialValues);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			history.push("/home");
		}

		try {
			// values.ir_id = record.uuid;
			const response = await request(
				"post",
				`/api/go/inspection_report/create_inspection_report/${window.location.pathname.replace(
					"/makereport/",
					""
				)}`,
				initialValues
			);
			if (response.status === "ok") {
				alert("회원가입이 완료되었습니다");
				window.location.replace("/report");
			}
		} catch (err) {
			alert(err);
		}
	};

	return (
		<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<h1>Circle 회원가입</h1>
					<Form onSubmit={handleSubmit}>
						<Input
							required
							fullWidth
							name="user_id"
							label="ID"
							type="user_id"
							value={values.user_id}
							onChange={handleInputChange}
						/>
						<Input
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							value={values.password}
							onChange={handleInputChange}
						/>
						<Input
							required
							fullWidth
							name="passwordConfirm"
							label="Confirm password"
							type="password"
							value={values.passwordConfirm}
							onChange={handleInputChange}
							error={error.passwordConfirm}
						/>
						<Input
							required
							fullWidth
							name="username"
							label="Username"
							type="username"
							value={values.username}
							onChange={handleInputChange}
						/>
						<Input
							required
							fullWidth
							name="email"
							label="E-mail"
							value={values.email}
							onChange={handleInputChange}
							error={error.email}
						/>
						<FormButton
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							// onClick={() => history.push("/home")}
							text="Register"
						/>
					</Form>
				</div>
			</Container>
		</>
	);
}
