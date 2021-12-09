/* eslint-disable */
import React, { useState } from "react";
import { useHistory } from "react-router";
import { styled, Typography, Button } from "@mui/material";
// import { useNavigate } from 'react-router-dom';

import Container from "@mui/material/Container";
import MultiImg2 from "Components/ImgUpload/Step2/MultiImg2";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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

const Imgupload2 = () => {
	const history = useHistory();
	const [alignment, setAlignment] = useState("right");
	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};
	// const navigate = useNavigate();

	return (
		<Container>
			<StyledTitle fontWeight={550} variant="subtitle1">
				용접 작업이 완료된 사진과 비표를 업로드 해주세요.
			</StyledTitle>
			<MultiImg2 />
			{/* 
			<StyledToggleButtonGroup
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
					onClick={() => history.push("/imgupload_step3")}

					// onClick={
					//   () => navigate('/expert/imgupload_step3')
					//   // navigate('/expert/imgupload_step2', {
					//   //   // state: { newId: row.ID }
					//   // })
					// }
				>
					<Typography variant="button">완료</Typography>
				</StyledToggleButton>
			</StyledToggleButtonGroup> */}
		</Container>
	);
};

export default Imgupload2;
