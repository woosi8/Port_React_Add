/* eslint-disable */
import React, { useState } from "react";
import { useHistory } from "react-router";
// import { useNavigate } from 'react-router-dom';
import { styled, Typography, Button, TextField } from "@mui/material";

import Container from "@mui/material/Container";
import MultiImg3 from "Components/ImgUpload/Step3/MultiImg3";
// import ImgBoardCheck from "Components/ImgUpload/Step3/ImgBoardCheck";
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
	"&.Mui-selected": {
		// backgroundColor: 'black'
	},
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
	},
	// ' .&MuiToggleButton-root': {
	//   '&:hover': {
	//     backgroundColor: 'primary.main'
	//   }
	// },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
	margin: "40px 0 20px 3vw",
}));

const Imgupload3 = () => {
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
		<>
			<Container>
				<StyledTitle fontWeight={550} variant="subtitle1">
					비표의 내용과 사진을 확인해 주세요 <br />
					AT011021212 - 자동용접
				</StyledTitle>
				<MultiImg3 />

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
						onClick={() => history.push("/imgupload_step4")}

						// onClick={
						//   () => navigate('/expert/imgupload_step4')
						//   // navigate('/expert/imgupload_step2', {
						//   //   // state: { newId: row.ID }
						//   // })
						// }
					>
						<Typography variant="button">완료</Typography>
					</StyledToggleButton>
				</StyledToggleButtonGroup> */}
			</Container>
		</>
	);
};

export default Imgupload3;
