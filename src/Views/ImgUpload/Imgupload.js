/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

// import { useNavigate, Navigate } from 'react-router-dom';
import {
	Box,
	Hidden,
	styled,
	Typography,
	Button,
	ButtonGroup,
} from "@mui/material";
// import { DataGrid } from '@mui/x-data-grid';
// import { ReportButtons } from 'src/components/WelderAndExpert/ReportForm';
// import { useRecoilState } from 'recoil';
// import { CompleteWeldRowState, CompleteWeldColumnState } from './Atom';
import Container from "@mui/material/Container";
import MultiImg from "Components/ImgUpload/Step1/MultiImg";
import ImgBoard from "Components/ImgUpload/Step1/ImgBoard";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import MainCardLayout from "src/components/WelderAndExpert/MainCardLayout";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	justifyContent: "center",
	"& .MuiToggleButtonGroup-grouped": {
		margin: theme.spacing(3),
		border: 0,
		"&.Mui-disabled": {
			border: 0,
		},
		"&:not(:first-of-type)": {
			borderRadius: theme.shape.borderRadius,
		},
		"&:first-of-type": {
			borderRadius: theme.shape.borderRadius,
		},
	},
}));
const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	width: "40vw",
	height: "8vh",
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
	},
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	height: "100%",
}));
const StyledTitle = styled(Typography)(({ theme }) => ({
	margin: "20px 0 10px 0",
}));
const StyledBtn = styled(Button)(({ theme }) => ({
	width: "40vw",
	height: "8vh",
	margin: "0 20px",
}));

const Imgupload = () => {
	const history = useHistory();

	const [alignment, setAlignment] = useState("left");
	const [formats, setFormats] = useState(() => ["italic"]);

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	// const navigate = useNavigate();
	return (
		<Container>
			<StyledTitle fontWeight={550} variant="subtitle1">
				사진을 업로드 해주세요 <br />
			</StyledTitle>
			<MultiImg />
			<ImgBoard />
			{/* <StyledToggleButtonGroup
				size="small"
				value={alignment}
				exclusive
				onChange={handleAlignment}
				aria-label="text alignment"
				sx={{ display: "flex", justifyContent: "center", margin: "30px 0" }}
			>
				<StyledToggleButton value="left" color="primary">
					<Typography variant="button">다시 업로드</Typography>
				</StyledToggleButton>
				<StyledToggleButton
					value="right"
					color="primary"
					onClick={() => history.push("/imgupload_step2")}

					// onClick={
					// () => navigate('/expert/imgupload_step2')
					// navigate('/expert/imgupload_step2', {
					//   // state: { newId: row.ID }
					// })
					// }
				>
					<Typography variant="button">완료</Typography>
				</StyledToggleButton>
			</StyledToggleButtonGroup> */}
		</Container>
	);
};

export default Imgupload;
