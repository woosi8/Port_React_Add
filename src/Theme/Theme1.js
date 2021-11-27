import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
	palette: {
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#b2ebf2",
		},
		warning: {
			main: "#d50000",
		},
		third: {
			main: "#f4ff81",
		},
	},
	myButton: {
		backgroundColor: "#fffff",
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			// md: 1140,
			// md: 1026,
			md: 1026,
			lg: 1200,
			xl: 1536,
		},
	},
	typography: {
		fontSize: 14,
		fontFamily: "Roboto, Raleway, Arial",
		h1: {
			color: "blue",
			fontSize: "60px",
		},

		h2: {
			fontSize: "50px",
		},
		h3: {
			fontSize: "40px",
		},
		h4: {
			fontSize: "30px",
		},
		h5: {
			fontSize: "20px",
		},
		h6: {
			fontSize: "10px",
			primary: {
				main: "#0000",
			},
		},
	},
	text: {},
});
