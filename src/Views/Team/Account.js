import { AddOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import AppMainCard from 'src/components/AppMainCard/AppMainCard';
import AppToolCard from 'src/components/AppToolCard/AppToolCard';
import AccountProfileDetails from 'src/components/AccountTest/AccountProfileDetails';
import Container from '@mui/material/Container';

const UsersAccount = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppMainCard title={'Detail Account'} />
      <AppToolCard
        toolButton={
          <Button
            color="dodgerblue"
            variant="contained"
            onClick={handleOpen}
            startIcon={<AddOutlined />}
          >
            Add
          </Button>
        }
      />
      <Container maxWidth="md">
        {/* <AccountProfile sx={{ marginBottom: '30px' }} /> */}
        <AccountProfileDetails color="primary" />
      </Container>
    </>
  );
};

export default UsersAccount;
