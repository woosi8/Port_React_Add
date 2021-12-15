import { styled } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import axios from "axios";
// import { useState } from "react";

const GroupHeader = styled(CardHeader)(({ theme }) => ({
	backgroundColor: theme.palette.primary.light,
	color: "#fff",
}));

// const GroupBox = styled(Card)(({ theme }) => ({
// 	borderRadius: 3,
// 	maxWidth: 345,
// 	// margin: theme.spacing(1),
// 	margin: "0 auto",
// 	marginBottom: "20px",
// }));

// const deleteCard = (id) => {
// 	axios
// 		.delete(`/delete_message/${id}`, {})
// 		.then(function (response) {
// 			console.log(response);
// 			// setrow(response);
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		});
// };

export function Cards({ row }) {
	// const [editing, setEditing] = useState(false);
	// const [values, setValues] = useState([]);

	// const handleChange = (event) => {
	// 	setValues({
	// 		...values,
	// 		[event.target.name]: event.target.value,
	// 	});
	// };

	// const editOpen = () => {
	// 	setEditing(true);
	// };
	return (
		<>
			<Card sx={{ maxWidth: 345, minWidth: 300, borderRadius: 2 }}>
				<GroupHeader
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Group Name"
				></GroupHeader>
				<CardContent sx={{ minHeight: 150 }}>
					<Typography variant="h5" component="div">
						Staff: 35
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="primary">
						Current Project: PH5
					</Typography>
					<Typography variant="body2">in charge of Construction</Typography>
				</CardContent>
			</Card>
		</>
	);
}
