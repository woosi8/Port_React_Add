// import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import ImageLoading from "../../Components/Loading/ImageLoading";
import { Container } from "@mui/material";
import { Theme } from "../../Theme/Theme1";
import { styled } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	container: {
		// backgroundColor: theme1.palette.primary.main,
		// paddingTop: theme.spacing(16),
		// paddingLeft: theme.spacing(3),
		"&MuiGrid-root": {},
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {},
	},
}));

const MyContainer = styled(Container)({
	// paddingLeft: "0 !important",
	// paddingRight: "0 !important",
	"&.MuiContainer-root": {
		padding: 0,
		maxWidth: "950px",
	},
	[Theme.breakpoints.up("lg")]: {
		height: "55vh",
	},
	[Theme.breakpoints.down("md")]: {
		width: "80vw",
		height: "45vh",
	},

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
});

const Loading = ({ history }) => {
	const classes = useStyles();

	return (
		<>
			{/* <MyContainer> */}
			<Grid
				container
				sx={{
					alignItems: "center",
					justifyContent: "center",
					paddingTop: "100px",
				}}
				spacing={3}
			>
				<ImageLoading />
			</Grid>
			{/* </MyContainer> */}
		</>
	);
};

export default Loading;
