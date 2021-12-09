import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { Form, useForm } from "../Custom/UserForm";
import Input from "../Custom/Input";
import FormButton from "../Custom/FormButton";

// import corplogo from "../../Assets/Images/corplogo.png";
// import reactIcon from "../../Assets/Images/react-blue.png";
// import corplogo from '../../Assets/Images/corplogo.png'
import AppleIcon from "@mui/icons-material/Apple";

const preventDefault = (event) => event.preventDefault();

const initialValues = {
	id: 0,
	user_id: "",
	password: "",
};

const LoginComponent = (props) => {
	const { values, handleInputChange } = useForm(initialValues);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("click");
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					height: "80%",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Typography
					variant="h4"
					noWrap
					component="div"
					fontWeight={600}
					color="primary"
				>
					Welcome
				</Typography>
				<br />
				{/* <img
					src={reactIcon}
					alt="corplogo"
					style={{ width: "20%", height: "60%" }}
				/> */}
				<AppleIcon style={{ fontSize: "10vw", color: "#3f51b5" }} />
				<br />
				<Typography
					variant="h4"
					noWrap
					component="div"
					fontWeight={600}
					color="primary"
				>
					Please just click to LOGIN
				</Typography>
			</Box>
			<Box
				component="div"
				sx={{
					display: "flex",
					height: "50%",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<Form onSubmit={handleSubmit}>
					<Stack direction="column" spacing={4}>
						<Input
							required
							name="user_id"
							label="Id"
							variant="standard"
							value={values.user_id}
							onChange={handleInputChange}
						/>
						<Input
							required
							name="password"
							label="Password"
							variant="standard"
							type="password"
							value={values.password}
							onChange={handleInputChange}
						/>
						<FormButton
							variant="outlined"
							size="large"
							// onClick={props.handleSubmit}
							onClick={() => props.history.push("/team_card")}
							type="button"
							text="Login"
						/>
					</Stack>
				</Form>
			</Box>
			<Box
				sx={{
					display: "flex",
					height: "20%",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
				onClick={preventDefault}
			>
				<Typography variant="h8" noWrap component="div" color="gray">
					Don't have an account?&nbsp;
					{/* <Link href="/dashboard" underline="hover"> */}
					<Link
						onClick={() => props.history.push("/register")}
						underline="hover"
					>
						{"Sign Up"}
					</Link>
					{/* 3bfe86789de224ba21184b96af3b8287 */}
				</Typography>
			</Box>
		</>
	);
};

export default LoginComponent;
