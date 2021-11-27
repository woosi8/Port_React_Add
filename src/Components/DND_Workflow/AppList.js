import { Grid, Box, IconButton, Stack, Button } from "@mui/material";
// import Theme from 'src/theme/Theme1';
import { Theme } from "../../Theme/Theme1";
import { X } from "react-feather";
const list = ["Data Gathering", "AI Inspection", "Third Function", "Guide"];

const AppList = ({ handleCloseApp, handleApp }) => {
	return (
		<>
			<Box
				sx={{
					borderTop: "1px solid #dadce0",
					marginTop: 10,
					padding: 2,
					backgroundColor: "#f1f1f1",
				}}
			>
				<Stack direction="row">
					<Grid container alignItems="stretch" spacing={1}>
						{list.map((item, idx) => (
							<Grid item key={idx}>
								<Button
									variant="rounded"
									sx={{
										cursor: "pointer",
										borderRadius: "8px",
										padding: 3,
										color: [Theme.palette.grey.main],
										mt: 1,
										border: "1px solid #dadce0",
										backgroundColor: "#fff",
									}}
									onClick={(props) => handleApp(props.target.innerText)}
								>
									{item}
								</Button>
							</Grid>
						))}
					</Grid>
					<IconButton sx={{ width: "55px", height: "55px" }}>
						<X onClick={handleCloseApp} />
					</IconButton>
				</Stack>
			</Box>
		</>
	);
};

export default AppList;
