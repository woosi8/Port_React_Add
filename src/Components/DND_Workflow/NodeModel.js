import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Card } from "@mui/material";
// import { Theme1 } from "../Theme/Theme1";
import { Theme } from "../../Theme/Theme1";

const CustomNode = styled(Card)((theme) => ({
	border: "1px solid #dadce0",
	color: "#202124",
	overflow: "hidden",
	position: "relative",
	width: "300px",
	[Theme.breakpoints.down("md")]: {
		width: "250px",
	},
	"&>div": {
		position: "relative",
		zIndex: 5,
	},
	"&:after": {
		content: '""',
		position: "absolute",
		width: 160,
		height: 160,
		background: "#bcd8f9",
		borderRadius: "50%",
		zIndex: 1,
		top: -85,
		right: -95,
		[Theme.breakpoints.down("sm")]: {
			top: -105,
			right: -140,
		},
	},
	"&:before": {
		content: '""',
		position: "absolute",
		zIndex: 1,
		width: 160,
		height: 160,
		background: "#bcd8f9",
		borderRadius: "50%",
		top: -125,
		right: -15,
		opacity: 0.5,
		[Theme.breakpoints.down("sm")]: {
			top: -155,
			right: -70,
		},
	},
}));

const NodeModel = forwardRef(({ children, ...others }, ref) => {
	return (
		<CustomNode ref={ref} {...others}>
			{children}
		</CustomNode>
	);
});

export default NodeModel;
