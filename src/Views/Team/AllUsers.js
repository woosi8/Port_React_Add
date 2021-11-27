// import TeamAllUsers from 'src/components/Team/List/TeamAllUsers';
import TeamAllUsers from "../../Components/Team/List/TeamAllUsers";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Managers = () => {
	return (
		<>
			<Link
				style={{
					display: "flex",
					justifyContent: "right",
					marginBottom: "2vw",
				}}
				href="https://woosi8.github.io/Port-React-Test/#/"
				target="_blank"
			>
				<Button variant="contained">CRUD Code</Button>
			</Link>
			<TeamAllUsers />
		</>
	);
};

export default Managers;
