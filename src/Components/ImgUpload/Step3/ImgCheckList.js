import React from "react";
import {
	Box,
	styled,
	Typography,
	Button,
	Grid,
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
								가로 3.5cm, 세로 4.5cm인 6개월 이내에 촬영한 천연색 상반신 정면
								탈모사진으로 얼굴의 길이가 2.5 ~ 3.5cm이어야 한다.
							</Typography>
						</Grid>
						<Grid item xs={5}>
							<StyledTitle variant="h5">2.사진촬영조건 - 원격검사</StyledTitle>
							<Typography>
								복사한 사진이나 포토샵으로 수정된 사진은 사용하면 안된다. 제출할
								사진이 접히거나 손상되지 않아야 하고, 사진표면이 균일하지 않거나
								저품질의 인화지를 사용해서도 안된다.
							</Typography>
							<StyledSubTitle>a.사진크기: 4x3, 1920x1080</StyledSubTitle>
							<StyledSubTitle>b.용량 : 1.2M 이상</StyledSubTitle>
							<StyledSubTitle>c.밝기(조도): 500Lux(lx) 이상</StyledSubTitle>
							<StyledSubTitle>
								여권사진의 크기 : 3.5cm(가로) x 4.5cm(세로)
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
								머리 정수리부터 턱까지의 얼굴 길이 : 2.5cm ~ 3.5cm(세로)
							</Typography>
						</Grid>
						<Grid item xs={5}>
							<StyledTitle variant="h5">4.비표사진</StyledTitle>
							<Typography>
								얼굴은 정면을 응시하여야 하고 얼굴을 한쪽으로 기울여서 촬영하면
								안됩니다.
							</Typography>
							<StyledSubTitle>a.사용자 번호</StyledSubTitle>
							<StyledSubTitle>b.촬영 장소</StyledSubTitle>
							<StyledSubTitle>c.촬영 일자</StyledSubTitle>
							<StyledSubTitle>d.사진사명</StyledSubTitle>
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
