import { RecoilRoot } from "recoil";
import history from "../../history";
import request from "../../axios";
import { styled } from "@mui/styles";

import { CssBaseline } from "@mui/material";
import DashboardHeader from "../Header/DashboardHeader";
import Grid from "@mui/material/Grid";
// import { makeStyles } from "@mui/styles";
import { useState } from "react";
import DashboardSidebar from "../Sidebar/Sidebar";
const DashboardLayoutRoot = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	display: "flex",
	height: "100%",
	overflow: "hidden",
	width: "100%",
}));

const DashboardLayoutWrapper = styled("div")(({ theme }) => ({
	display: "flex",
	flex: "1 1 auto",
	overflow: "hidden",
	paddingTop: 64,
	[theme.breakpoints.up("lg")]: {
		paddingLeft: 256,
	},
}));

const DashboardLayoutContainer = styled("div")({
	display: "flex",
	flex: "1 1 auto",
	overflow: "hidden",
});

const DashboardLayoutContent = styled("div")({
	flex: "1 1 auto",
	height: "100%",
	overflow: "auto",
	padding: "50px 50px 0 50px",
});
const PrimaryLayout = ({ Views, id, korean }) => {
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<RecoilRoot>
			<CssBaseline />
			<DashboardLayoutRoot>
				<DashboardHeader
					korean={korean}
					onMobileNavOpen={() => setMobileNavOpen(true)}
				/>
				<DashboardSidebar
					onMobileClose={() => setMobileNavOpen(false)}
					openMobile={isMobileNavOpen}
				/>
				<DashboardLayoutWrapper>
					<DashboardLayoutContainer>
						<DashboardLayoutContent>
							<Views
								history={history}
								request={request}
								id={id}
								korean={korean}
							/>
						</DashboardLayoutContent>
					</DashboardLayoutContainer>
				</DashboardLayoutWrapper>
			</DashboardLayoutRoot>
		</RecoilRoot>
	);
};

export default PrimaryLayout;
