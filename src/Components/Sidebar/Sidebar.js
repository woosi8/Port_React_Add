import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
	Avatar,
	Box,
	Divider,
	Drawer,
	Hidden,
	List,
	Typography,
} from "@mui/material";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ListAltIcon from "@mui/icons-material/ListAlt";
import {
	AlertCircle as AlertCircleIcon,
	BarChart as BarChartIcon,
	Lock as LockIcon,
	Settings as SettingsIcon,
	ShoppingBag as ShoppingBagIcon,
	User as UserIcon,
	UserPlus as UserPlusIcon,
	Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";
import img from "../../Assets/Images/corplogo.png";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CreateIcon from "@mui/icons-material/Create";
const user = {
	avatar: img,
	jobTitle: "Junior Developer",
	name: "Hyuck Choi",
};

const items = [
	{
		href: "/team_card",
		icon: RecentActorsIcon,
		title: "Team",
	},
	{
		href: "/users_table",
		icon: TableRowsIcon,
		title: "UserTable",
	},
	{
		href: "/account",
		icon: UserIcon,
		title: "MyAccount",
	},
	{
		href: "/annotorious",
		icon: CreateIcon,
		title: "Annotorious",
	},
	{
		href: "/loading",
		icon: ImageIcon,
		title: "Img-Loading",
	},

	{
		href: "/team_maker",
		icon: UsersIcon,
		title: "TeamMaker (Working...)",
	},
	{
		href: "/table_making",
		icon: AppRegistrationIcon,
		title: "TableMaking (Working...)",
	},

	{
		href: "/dragNdrop",
		icon: ArchiveIcon,
		title: "DragAndDrop (Working...)",
	},

	{
		href: "/register",
		icon: UserPlusIcon,
		title: "Register",
	},
	{
		href: "/404",
		icon: AlertCircleIcon,
		title: "Error",
	},
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
	// const location = useLocation();

	// useEffect(() => {
	// 	if (openMobile && onMobileClose) {
	// 		onMobileClose();
	// 	}
	// }, [location.pathname]);

	const content = (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					p: 2,
				}}
			>
				<Avatar
					component={RouterLink}
					src={user.avatar}
					sx={{
						cursor: "pointer",
						width: 64,
						height: 64,
					}}
					to="/account"
				/>
				<Typography color="textPrimary" variant="h5">
					{user.name}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 2 }}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
		</Box>
	);

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
					PaperProps={{
						sx: {
							width: 256,
						},
					}}
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden lgDown>
				<Drawer
					anchor="left"
					open
					variant="persistent"
					PaperProps={{
						sx: {
							width: 256,
							top: 64,
							height: "calc(100% - 64px)",
						},
					}}
				>
					{content}
				</Drawer>
			</Hidden>
		</>
	);
};

DashboardSidebar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
	onMobileClose: () => {},
	openMobile: false,
};

export default DashboardSidebar;
