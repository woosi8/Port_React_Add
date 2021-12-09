/* eslint-disable */
import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { Box, styled, Typography, Button, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import weld from "../weld.png";
import weld1 from "../weld1.jpg";
import weld2 from "../weld2.jpg";
import SwipeableViews from "react-swipeable-views";
import MultiImgError from "./MultiImgError";

const StyledTitle = styled(Typography)(({ theme }) => ({
	textAlign: "center",
}));
const StyledBox = styled(Box)(({ theme }) => ({
	width: "100%",
	margin: "0 auto",
	height: "50vh", // 이미지 높이조절 (애만 바꾸면 됨)
	objectFit: "fill",
}));
const StyledTabBox = styled(Box)(({ theme }) => ({}));
const StyledBtn = styled(Button)(({ theme }) => ({
	width: "100%",
	height: "100%",
	textTransform: "none",
	border: "1px solid red",
	backgroundColor: theme.palette.grey[500],
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
	textAlign: "center",
	"&.MuiTabPanel-root": {
		padding: "0",
		marginTop: "3vw",
	},
}));

const MultiImg2 = () => {
	const [imgFile, setImgFile] = useState(null); //파일
	const [index, setIndex] = React.useState(0);
	const [success, setSuccess] = useState(false); //비드 인식 성공여부

	const handleChange = (event, value) => {
		setIndex(value);
		if (event.cancelable) {
			event.preventDefault();
		}
	};
	const handleChangeIndex = (index) => {
		setIndex(index);
	};

	return (
		<Box sx={{ width: "100%", typography: "body1" }}>
			<Typography>용접사진(4장)</Typography>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={index} onChange={handleChange} variant="fullWidth">
					<Tab label="0°" />
					<Tab label="90°" />
					<Tab label="180°" />
					<Tab label="270°" />
				</Tabs>
			</Box>
			<SwipeableViews
				index={index}
				onChangeIndex={handleChangeIndex}
				enableMouseEvents
				// autoPlay={true}
				// interval={2500}
			>
				<StyledTabBox>
					<StyledBox component="img" src={weld} alt="용접사진" />
					{!success ? <MultiImgError /> : null}
				</StyledTabBox>
				<StyledTabBox>
					<StyledBox component="img" src={weld1} alt="용접사진" />
					{success ? <MultiImgError /> : null}
				</StyledTabBox>
				<StyledTabBox>
					<StyledBox component="img" src={weld1} alt="용접사진" />
					{!success ? <MultiImgError /> : null}
				</StyledTabBox>
				<StyledTabBox>
					<StyledBox component="img" src={weld2} alt="용접사진" />
					{success ? <MultiImgError /> : null}
				</StyledTabBox>
			</SwipeableViews>
		</Box>
	);
};

export default MultiImg2;
