import React from "react";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeView from "@mui/lab/TreeView";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UserItem from "./UserItem";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import UserData from "./UserData";
const useStyles = makeStyles({
	root: {
		height: 240,
		flexGrow: 1,
		// maxWidth: 400,
		"& .MuiTreeItem-iconContainer svg": {
			fontSize: "100 !important",
		},
	},
});

const UserView = ({
	items = UserData,
	selected: selectedProps = [],
	onSelect: onSelectProps = () => {},
	disableMultiParentSelection = true,
}) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState([
		"documents",
		"documents.bootstrap",
		"documents.material-ui",
	]);

	const handleToggle = (event, nodeIds) => {
		setExpanded(nodeIds);
	};

	return (
		<TreeView
			className={classes.root}
			expanded={expanded}
			onNodeToggle={handleToggle}
			defaultCollapseIcon={<ExpandMoreIcon sx={{ width: "100px" }} />}
			defaultExpandIcon={<ArrowForwardIosIcon sx={{ fontSize: "100" }} />}
			sx={{ display: "flex" }}
		>
			{UserData.length > 0 && (
				<UserItem
					items={items}
					selected={selectedProps}
					onSelect={onSelectProps}
					// sx={{ width: '100px' }}
					// disableMultiParentSelection={disableMultiParentSelection}
				/>
			)}
		</TreeView>
	);
};

export default UserView;
