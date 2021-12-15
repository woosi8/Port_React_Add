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
import animal from "Assets/Images/animal.jpg";
import elk from "Assets/Images/elk.jpg";
import cat from "Assets/Images/cat.jpg";
import squ from "Assets/Images/squireel.jpg";

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
					이미지 분석 결과
				</Typography>
				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							0°
						</StyledTypo>
						<StyledBox component="img" src={squ} alt="용접사진" />
					</Grid>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							90°
						</StyledTypo>
						<StyledBox component="img" src={cat} alt="용접사진" />
					</Grid>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							180°
						</StyledTypo>
						<StyledBox component="img" src={animal} alt="용접사진" />
					</Grid>
					<Grid item xs={8}>
						<StyledTypo variant="h5" color="primary">
							270°
						</StyledTypo>
						<StyledBox component="img" src={elk} alt="용접사진" />
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ margin: "5vw 0 0 3vw" }}>
				<Typography variant="h10" sx={{ margin: "3vw 0" }}>
					이미지내용
				</Typography>
				<Typography variant="h5" sx={{ marginBottom: "3vw" }}>
					ABCD124 -사용자{" "}
				</Typography>
			</Box>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						사용자 번호
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="ABCD124"
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
						촬영장소
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="Austria"
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
						촬영일자
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="2021.10.12"
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
						사진사
					</Grid>
					<Grid item xs={8}>
						<StyledText
							helperText=" "
							id="filled-hidden-label-small"
							defaultValue="사진사1"
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
