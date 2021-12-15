/* eslint-disable */
import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { Box, styled, Typography, Button, Stack } from "@mui/material";

import weld from "../weld.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const StyledBox = styled(Box)(({ theme }) => ({
	width: "100%",
	margin: "0 auto",
	Height: "50vh",
	objectFit: "fill",
}));

const ImgBoard = () => {
	const [value, setValue] = React.useState("1");
	const [imgFile, setImgFile] = useState(null); //  비표 파일

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%", typography: "body1" }}>
			<Typography variant="h5" color="primary" sx={{ margin: "2vw 0" }}>
				이미지 정보
			</Typography>

			{imgFile ? (
				<StyledBox component="img" src={weld} alt="비표사진" />
			) : (
				<StyledBox>
					<Button
						component="label"
						variant="contained"
						sx={{
							width: "100%",
							height: "50vh",
							textTransform: "none",
						}}
						color="primary"
					>
						<Stack direction="column" alignItems="center">
							<Typography variant="h5">
								{" "}
								이미지 정보 사진을 업로드 해주세요
							</Typography>
							<AddCircleOutlineIcon fontSize="large" />
						</Stack>
						<input
							type="file"
							name="imgpath"
							id="imgpath"
							hidden
							// onChange={handleChangeFile}
						/>
					</Button>
				</StyledBox>
			)}
		</Box>
	);
};

export default ImgBoard;
