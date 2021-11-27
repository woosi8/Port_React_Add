import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import FormButton from '../Custom/FormButton';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    '& .makeStyles-button-20': { margin: 0 }
  }
}));

// const Btn = styled(FormButton)({
//   height: '100%',
//   padding: '0 30px',
//   margin: 0
// });

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const TeamProfile = (props) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    groupName: 'CPS',
    projectName: 'Circle',
    projectGoal: '',
    phone: '',
    state: 'Alabama'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.log(values);
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader
          subheader="프로젝트를 수행할 그룹을 생성해 주세요"
          title="그룹 생성"
          sx={{ fontWeight: 'bold' }}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Group name"
                name="groupName"
                onChange={handleChange}
                required
                value={values.groupName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Project name"
                name="projectName"
                onChange={handleChange}
                required
                value={values.projectName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Project Goal"
                name="projectGoal"
                onChange={handleChange}
                required
                value={values.projectGoal}
                variant="outlined"
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <FormButton
                className={classes.btn}
                type="submit"
                variant="contained"
                color="primary"
                // onClick={() => history.push("/home")}
                text="Register"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default TeamProfile;
