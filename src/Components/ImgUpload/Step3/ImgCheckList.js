import React from "react";
import {
	Box,
	styled,
	Typography,
	Button,
	Grid,
	Paper,
	Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "60%",
	height: "60%",
	backgroundColor: "#fff",
	zIndex: "1000",
	overflow: "scroll",
};

const StyledHeaderBox = styled(Box)(({ theme }) => ({
	display: "flex",
	background: "red",
	color: "#fff",
	height: "10vh",
	alignItems: "center",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	margin: "0 auto",
}));
const StyledTitle = styled(Typography)(({ theme }) => ({
	margin: "1vh 0",
}));
const StyledSubTitle = styled(Typography)(({ theme }) => ({
	fontWeight: "bold",
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
	//   margin: '1vw'
}));

// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// }));

const ImgCheckList = ({ handleClose }) => {
	const handleclick = () => {
		handleClose();
	};
	return (
		<div>
			<Box sx={style}>
				<StyledHeaderBox>
					<Button
						onClick={handleclick}
						sx={{ position: "absolute", color: "#fff" }}
					>
						<CloseIcon fontSize="large" />
					</Button>
					<Typography
						variant="h5"
						color=""
						sx={{ textAlign: "center", width: "100%" }}
					>
						사진 업로드 전 주의사항
					</Typography>
				</StyledHeaderBox>
				<StyledContainer>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						sx={{ margin: "5vh 0" }}
					>
						상기 순서에 따라 사진을 확인 해주세요.
					</Typography>
					<StyledGrid container spacing={2} columns={25} direction="column">
						<Grid item xs={5}>
							<StyledTitle variant="h5">1.육안검사</StyledTitle>
							<Typography>
								육안검사는 용접부 표면 150mm ~ 600mm 이내에 실시 되어야 하며
								시야각은 표면에서 30° 미만이어야 한다.
							</Typography>
						</Grid>
						<Grid item xs={5}>
							<StyledTitle variant="h5">2.사진촬영조건 - 원격검사</StyledTitle>
							<Typography>
								육안검사와 동일한 조건으로 용접부 표면 150mm ~ 600mm 이내에서
								용접부가 사진 중심에 나오도록 촬영되어야 하며 용접비드 전체가
								확인되어야 한다.
							</Typography>
							<StyledSubTitle>a.사진크기: 4x3, 1920x1080</StyledSubTitle>
							<StyledSubTitle>b.용량 : 1.2M 이상</StyledSubTitle>
							<StyledSubTitle>c.밝기(조도): 500Lux(lx) 이상</StyledSubTitle>
							<StyledSubTitle>
								d.촬영각도: 용접표면 기준 90도 직각 촬영
							</StyledSubTitle>
							<StyledSubTitle>
								# 사진 선명도 불량으로 인한 사진판독 불가시 해당부위는 재촬영
								되어야 한다.
							</StyledSubTitle>
						</Grid>
						<Grid item xs={5}>
							<StyledTitle variant="h5">3.사진촬영방법</StyledTitle>
							<Typography>
								사진 촬영은 각기 다른 각도에서 4면(0°90°180°270°)촬영이 원칙이며
								각각의 사진 촬영은 육안으로 확인이 가능한 적정 측정공구 사용이
								요구된다.
							</Typography>
						</Grid>
						<Grid item xs={5}>
							<StyledTitle variant="h5">4.비표사진</StyledTitle>
							<Typography>
								원격검사 사진은 다음의 내용을 포함한 비표가 보이도록 촬영 되어야
								한다.
							</Typography>
							<StyledSubTitle>a.공사명,협력사명</StyledSubTitle>
							<StyledSubTitle>b.도면 번호, 이음 번호</StyledSubTitle>
							<StyledSubTitle>c.배관 관경</StyledSubTitle>
							<StyledSubTitle>d.용접 일자</StyledSubTitle>
							<StyledSubTitle>e.용접사명</StyledSubTitle>
						</Grid>
						<StyledGrid item xs={5}>
							<StyledTitle variant="h5">
								5.사진촬영 불량 사례에 대한 후속조치
							</StyledTitle>
							<Typography></Typography>
						</StyledGrid>
					</StyledGrid>
				</StyledContainer>
			</Box>
		</div>
	);
};

export default ImgCheckList;
