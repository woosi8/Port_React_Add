/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, styled, Typography, Grid, Paper, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import WarningIcon from "@mui/icons-material/Warning";
import ImgCheckList from "./ImgCheckList";
// import { ReactModal } from './ReactModal';
import animal from "Assets/Images/animal.jpg";
import elk from "Assets/Images/elk.jpg";
import cat from "Assets/Images/cat.jpg";
import squ from "Assets/Images/squireel.jpg";

const StyledTypo = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	marginBottom: "1vw",
	borderBottom: "1px solid",
}));

const StyledTypoBoder = styled(Typography)(({ theme }) => ({
	margin: "1vh 0",
	// width: '25vw',
	display: "inline-block",
	borderBottom: "1px solid red",
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

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: "100%",
}));

const MultiImg3 = () => {
	const initialFormState = {
		ID: null,
		drawing: "",
		pipe: "",
		date: "",
		welder: "",
	};
	const [values, setValues] = useState(initialFormState);
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
		console.log(values);
	};
	const [open, setOpen] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Box sx={{ width: "100%", typography: "body1" }}>
				<Box sx={{ flexGrow: 1 }}>
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
						<Grid item xs={8}>
							<StyledTypo variant="h5" color="error">
								특이사항
							</StyledTypo>
							<StyledBox component="img" src={cat} alt="비표사진" />
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ margin: "5vh 0 0 3vw" }}>
					<Box sx={{ margin: "3vh 0" }}>
						<StyledTypoBoder
							variant="h5"
							color="red"
							onClick={handleOpen}
							sx={{ cursor: "pointer" }}
						>
							<WarningIcon sx={{ margin: "0 3px -3px 0" }} />
							업로드 전 사진 체크리스트
						</StyledTypoBoder>
						<Typography variant="body1">
							잘못된 사진 업로드 시 문제가 발생할 수 있습니다. 반드시 사진을
							확인해 주세요.
						</Typography>
					</Box>

					<Typography variant="h10" sx={{ margin: "3vh 0" }}>
						이미지내용 (아래 표를 클릭 시 수정 가능합니다.)
					</Typography>
					<Typography variant="h5" sx={{ marginBottom: "3vh" }}>
						ABCD124 -사용자
					</Typography>
				</Box>
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							사용자 번호
						</Grid>
						<Grid item xs={6}>
							<StyledText
								helperText=" "
								variant="standard"
								size="small"
								hiddenLabel
								color="primary"
								name="drawing"
								// onChange={handleChange}
								// value={values.drawing}
								defaultValue="ABCD124"
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2}>
						<Grid item xs={6}>
							촬영장소
						</Grid>
						<Grid item xs={6}>
							<StyledText
								helperText=" "
								defaultValue="Austria"
								variant="standard"
								size="small"
								hiddenLabel
								color="primary"
								// name=""
								// onChange={handleChange}
								// value={values}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							촬영일자
						</Grid>
						<Grid item xs={6}>
							<StyledText
								helperText=" "
								defaultValue="2021.10.12"
								variant="standard"
								size="small"
								hiddenLabel
								color="primary"
								// name=""
								// onChange={handleChange}
								// value={values}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							사진사
						</Grid>
						<Grid item xs={6}>
							<StyledText
								helperText=" "
								defaultValue="사진사1"
								variant="standard"
								size="small"
								hiddenLabel
								color="primary"
								// name=""
								// onChange={handleChange}
								// value={values}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Modal open={open} onClose={handleClose}>
				<div>
					<ImgCheckList handleClose={handleClose} />
				</div>
			</Modal>
		</>
	);
};

export default MultiImg3;
