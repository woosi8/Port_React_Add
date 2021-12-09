/* eslint-disable */
import React, { useState } from "react";

import {
	styled,
	Typography,
	Button,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MultiImg4 from "Components/ImgUpload/Step4/MultiImg4";

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
const StyledTitle = styled(Typography)(({ theme }) => ({
	margin: "40px 0 20px 3vw",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	height: "100%",
}));

const StyledBtn = styled(Button)(({ theme }) => ({
	width: "40vw",
	height: "8vh",
	margin: "0 20px",
}));

const Imgupload4 = () => {
	const [alignment, setAlignment] = useState("right");
	const [formats, setFormats] = useState(() => ["italic"]);

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	return (
		<Container>
			<ListItem alignItems="flex-start" sx={{ marginTop: "3vw" }}>
				<ListItemAvatar>
					<CheckCircleIcon
						color="primary"
						sx={{ textAlign: "center" }}
						fontSize="large"
					/>
				</ListItemAvatar>
				<ListItemText
					// primary="정상적으로 업로드 되었습니다."
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: "inline" }}
								component="span"
								variant="body1"
								color="text.primary"
							>
								정상적으로 업로드 되었습니다.
								<br /> 결과를 확인해 주세요.
							</Typography>
						</React.Fragment>
					}
				/>
			</ListItem>

			<MultiImg4 />

			{/* <StyledToggleButtonGroup
				size="small"
				value={alignment}
				exclusive
				onChange={handleAlignment}
				aria-label="text alignment"
				sx={{ display: "flex", justifyContent: "center", margin: "30px 0" }}
			>
				<StyledToggleButton value="left" color="primary">
					<Typography variant="button">다음 작업 업로드</Typography>
				</StyledToggleButton>
				<StyledToggleButton value="right" color="primary">
					<Typography variant="button">보고서 작성하기</Typography>
				</StyledToggleButton>
			</StyledToggleButtonGroup> */}
		</Container>
	);
};

export default Imgupload4;
