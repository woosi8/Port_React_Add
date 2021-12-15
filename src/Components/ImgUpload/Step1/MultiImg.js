/* eslint-disable */
import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import { Box, styled, Typography, Button, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
import TabPanel from "@mui/lab/TabPanel";
// import Container from '@mui/material/Container';
// import { TextField } from '@material-ui/core';
import weld from "../weld.png";
import weld1 from "../weld1.jpg";
import weld2 from "../weld2.jpg";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from 'react-swipeable-views-utils';
import ImgUpload from "./ImgUpload";
import animal from "Assets/Images/animal.jpg";
import elk from "Assets/Images/elk.jpg";
import cat from "Assets/Images/cat.jpg";
import squ from "Assets/Images/squireel.jpg";

const StyledTitle = styled(Typography)(({ theme }) => ({
	textAlign: "center",
}));
const StyledBox = styled(Box)(({ theme }) => ({
	width: "100%",
	margin: "0 auto",
	maxHeight: "50vh",
	minHeight: "50vh",
	// Height: '100%',
	objectFit: "fill",
}));
const StyledBtn = styled(Button)(({ theme }) => ({
	width: "100%",
	maxHeight: "50vh",
	minHeight: "50vh",
	textTransform: "none",
	border: "1px solid red",
	// backgroundColor: theme.palette.grey[500]
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
	textAlign: "center",
	"&.MuiTabPanel-root": {
		padding: "24px 0",
	},
	"&:hover": {
		// backgroundColor: '#f5f5f5',
		// opacity: [0.9, 0.8, 0.7]
	},
	// '&.Mui-focused'{
	// }
}));

const MultiImg = () => {
	// const [value, setValue] = React.useState('1');
	const [imgFile, setImgFile] = useState(null); //파일
	const [index, setIndex] = React.useState(0);
	// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
			<Typography variant="h5" color="primary">
				사진(4장)
			</Typography>

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
				// style={{ height: '50vh' }}
			>
				{imgFile ? (
					<StyledBox component="img" src={animal} alt="용접사진" />
				) : (
					<ImgUpload />
				)}

				{!imgFile ? (
					<StyledBox component="img" src={cat} alt="용접사진" />
				) : (
					<ImgUpload />
				)}
				{imgFile ? (
					<StyledBox component="img" src={elk} alt="용접사진" />
				) : (
					<ImgUpload />
				)}
				{!imgFile ? (
					<StyledBox component="img" src={animal} alt="용접사진" />
				) : (
					<ImgUpload />
				)}
			</SwipeableViews>
		</Box>
	);
};

export default MultiImg;
