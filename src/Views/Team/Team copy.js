import { useState } from 'react';
import Main from 'src/components/AppSiders/Main';
import AppSider from 'src/components/AppSiders/AppSider';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import TeamModal from 'src/components/Team/TeamModal';
import { Group } from 'src/components/Card/Card';
import { teamItems } from 'src/components/AppSiders/SiderItems';

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme1.palette.primary.main,
    // paddingTop: theme.spacing(16),
    // paddingLeft: theme.spacing(3),
    '&MuiGrid-root': {},
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {}
  },
  grids: {
    marginBottom: '55px'
    // textAlign: "center",
  },
  modalc: {
    textAlign: 'center',
    marginBottom: '55px'
  }
}));
const Team = ({ history }) => {
  // const [toggleDrawer, setToggleDrawer] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  function createData(name, project, position, authorization) {
    return { name, project, position, authorization };
  }

  const rows = [
    createData('김직원', ' A동 1층 용접 작업', '관리자', '마스터'),
    createData(
      '이직원',
      ' B동 2층 용접 작업',
      '감리사',
      '대쉬보드,체크리스트,보고서 수정,보고서 확인'
    ),
    createData('양직원', ' C동 1층 용접 작업', '용접공', '설정')
  ];
  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={teamItems} />
      <Main open={open}>
        <div className={classes.container}>
          <Grid container sx={{ alignItems: 'center' }} spacing={3}>
            <Grid item md={4} sm={6} xs={2} className={classes.modalc}>
              <TeamModal />
            </Grid>
            {rows.map((row) => (
              <Grid
                item
                key={row.name}
                md={4}
                sm={6}
                xs={10}
                className={classes.grids}
              >
                <Group row={row} />
              </Grid>
            ))}
          </Grid>
          {/* <Divider /> */}
        </div>
      </Main>
    </>
  );
};

export default Team;
