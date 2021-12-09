/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	styled,
	Typography,
	Button,
	Grid,
	Paper,
	Link,
	TextField,
} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import weld from "../weld.png";
import weld1 from "../weld1.jpg";
import weld2 from "../weld2.jpg";

const StyledTypo = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	borderBottom: "1px solid",
	marginBottom: "1vw",
}));
const StyledText = styled(TextField)(({ theme }) => ({
	textAlign: "center",
	"& .MuiInput-root": {
		"&.MuiInput-underline:before": {
			display: "none",
		},
		"&.MuiInput-underline:after": {
			display: "none",
		},
		"&.Mui-disabled": {
			color: "rgba(0, 0, 0, 0.87)",
		},
	},
}));
const StyledBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "40vh",
	margin: "0 auto",
	maxHeight: "50vw",
	// Height: '50vw',
	objectFit: "fill",
}));

const MultiImg4 = () => {
	const [value, setValue] = React.useState("1");
	const [imgFile, setImgFile] = useState(null); //파일

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%", typography: "body1" }}>
			<Box sx={{ flexGrow: 1 }}>
				{/* <StyledText>AI 분석 결과</StyledText> */}
				<Typography
					variant="h5"
					color="primary"
					sx={{ textAlign: "center", margin: "3vw 0" }}
				>
					AI 분석 결과
				</Typography>
				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							0°
						</StyledTypo>
						<StyledBox component="img" src={weld} alt="용접사진" />
					</Grid>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							90°
						</StyledTypo>
						<StyledBox component="img" src={weld1} alt="용접사진" />
					</Grid>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							180°
						</StyledTypo>
						<StyledBox component="img" src={weld2} alt="용접사진" />
					</Grid>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							270°
						</StyledTypo>
						<StyledBox component="img" src={weld2} alt="용접사진" />
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ margin: "5vw 0 0 3vw" }}>
				<Typography variant="h10" sx={{ margin: "3vw 0" }}>
					비표인식내용
				</Typography>
				<Typography variant="h5" sx={{ marginBottom: "3vw" }}>
					AT01102121 -용접자2
				</Typography>
			</Box>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						도면/이용번호
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="DWG-001/01"
							variant="standard"
							size="small"
							hiddenLabel
							color="primary"
							disabled
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={4}>
						배관관경
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="CS/SS 200A"
							variant="standard"
							size="small"
							hiddenLabel
							color="primary"
							disabled
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						용접일자
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="2021.11.10"
							variant="standard"
							size="small"
							hiddenLabel
							color="primary"
							disabled
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						용접사명
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="용접자2"
							variant="standard"
							size="small"
							hiddenLabel
							color="primary"
							disabled
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default MultiImg4;
