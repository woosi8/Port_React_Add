import React from 'react';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import AuthorityItem from './AuthorityItem';
import AuthorityData from './AuthorityData';
const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400
  }
});

const AuthorityView = ({
  items = AuthorityData,
  selected: selectedProps = [],
  onSelect: onSelectProps = () => {},
  disableMultiParentSelection = true
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([
    'documents',
    'documents.bootstrap',
    'documents.material-ui'
  ]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  return (
    <TreeView
      className={classes.root}
      expanded={expanded}
      onNodeToggle={handleToggle}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ArrowForwardIosIcon />}
    >
      {AuthorityData.length > 0 && (
        <AuthorityItem
          items={items}
          selected={selectedProps}
          onSelect={onSelectProps}
          // disableMultiParentSelection={disableMultiParentSelection}
        />
      )}
    </TreeView>
  );
};

export default AuthorityView;
