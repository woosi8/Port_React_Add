import { useState } from 'react';

import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import Cancel from '@mui/icons-material/Cancel';
import { InputBase } from '@mui/material';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: 0,
    color: 'secondary',
    position: 'absolute',
    '& .makeStyles-button-21': { margin: 0, color: 'secondary' }
  },
  container: {
    height: '100%'
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%'
    }
  },
  searchIcon: {
    marginLeft: theme.spacing(1)
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  input: {
    marginLeft: theme.spacing(1)
  }
}));
const emails = ['username@gmail.com', 'user02@gmail.com'];

const TeamInvitation = (props) => {
  const { onClose, selectedValue, open } = props;
  const [opens, setOpens] = useState(false);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const classes = useStyles({ opens });

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add Members</DialogTitle>
      <div className={classes.search}>
        <SearchIcon className={classes.searchIcon} />
        <InputBase className={classes.input} placeholder="Search...." />
        <Cancel className={classes.cancel} onClick={() => setOpens(false)} />
      </div>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick('addAccount')}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add members" />
        </ListItem>
      </List>
    </Dialog>
  );
};

TeamInvitation.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};
export default TeamInvitation;
