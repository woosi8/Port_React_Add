import Dashboard from "../Views/Dashboard/Dashboard";
// import Login from "../Components/Login/Login";
import About from "../Views/About/About";
import Contact from "../Views/Contact/Contact";
import Count from "../Views/Count/Count";
import Login from "../Views/Login/Login";
import Register from "../Views/Login/Register";
import Account from "../Views/Acount/Account";
import TableMaking from "../Views/TableMaking/TableMaking";
import TeamSpecification from "../Views/Team/TeamSpecification";
import Team from "../Views/Team/Team";
import AllUsers from "../Views/Team/AllUsers";
import Loading from "../Views/Loading/Loading";
import DragDrop from "../Views/DragNDrop/DragandDrop";
import Annotorious from "../Views/Annotorious/Annotorious";
export const MainRoute = [
	{
		id: "login",
		component: Login,
		icon: "",
		path: "/",
		korean: "로그인",
		exact: true,
	},
	{
		id: "register",
		component: Register,
		icon: "",
		path: "/register",
		korean: "회원가입",
		exact: true,
	},
];

export const ChildRoute = [
	{
		id: "Dashboard",
		component: Dashboard,
		path: "/dashboard",
		korean: "대시보드",
		exact: true,
	},
	{
		id: "About",
		component: About,
		path: "/About",
		korean: "어바웃",
		exact: true,
	},
	{
		id: "Acount",
		component: Account,
		path: "/Account",
		korean: "어카운트",
		exact: true,
	},
	{
		id: "Contact",
		component: Contact,
		path: "/Contact",
		korean: "콘텍트",
		exact: true,
	},
	{
		id: "Count",
		component: Count,
		path: "/Count",
		korean: "콘텍트",
		exact: true,
	},
	{
		id: "TableMaking",
		component: TableMaking,
		path: "/table_making",
		korean: "콘텍트",
		exact: true,
	},

	{
		id: "Team",
		component: TeamSpecification,
		path: "/team_maker",
		korean: "콘텍트",
		exact: true,
	},
	{
		id: "TeamCard",
		component: Team,
		path: "/team_card",
		korean: "콘텍트",
		exact: true,
	},
	{
		id: "AllUser",
		component: AllUsers,
		path: "/users_table",
		korean: "사용자들",
		exact: true,
	},
	{
		id: "Loading",
		component: Loading,
		path: "/loading",
		korean: "사용자들",
		exact: true,
	},
	{
		id: "DragNDrop",
		component: DragDrop,
		path: "/dragNdrop",
		korean: "사용자들",
		exact: true,
	},
	{
		id: "Annotorious",
		component: Annotorious,
		path: "/annotorious",
		korean: "사용자들",
		exact: true,
	},
];
