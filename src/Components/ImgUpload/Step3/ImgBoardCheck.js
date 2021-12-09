/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  styled,
  Typography,
  Button,
  Stack,
  Divider,
  NativeSelect
} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container';
import { TextField } from '@material-ui/core';
import weld from '../weld.png';
import weld1 from '../weld1.jpg';
import weld2 from '../weld2.jpg';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DataGrid } from '@mui/x-data-grid';
import { StyledInputBase } from 'src/components/WelderAndExpert/ReportForm';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ReportButtons } from 'src/components/WelderAndExpert/ReportForm';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-row': {
    cursor: 'pointer'
  }
}));
const StyledDivider = styled(Divider)({
  margin: '2px 0 10px'
});

const ImgBoardCheck = () => {
  const [value, setValue] = React.useState('1');
  const [imgFile, setImgFile] = useState(null); //파일

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Grid
        container
        sx={{
          width: '100%',
          height: '100%',
          outline: '1px solid #EAEAEA',
          padding: '15px',
          boxSizing: 'border-box'
        }}
      >
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant="caption" color="primary">
            Title
          </Typography>
          <StyledDivider />
          <StyledInputBase
            sx={{ width: '100%', margin: '5px 0' }}
            id="outlined-basic"
            variant="outlined"
            defaultValue="daily_report_"
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant="caption" color="primary">
            Work Info
          </Typography>
          <StyledDivider />
        </Grid>
        {/* {reportWorkInfo.map((item) => (
          <ReportItems key={item.id} item={item} />
        ))} */}
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant="caption" color="primary">
            Inspector Info
          </Typography>
          <StyledDivider />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant="caption" color="primary">
            Inspection Info
          </Typography>
          <StyledDivider />
        </Grid>

        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant="caption" color="primary">
            Welds Info
          </Typography>
          <StyledDivider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ lineHeight: '40px' }}>
            판독내용 확인
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ height: 300 }}>
            <StyledDataGrid
              pagination
              rowHeight={35}
              pageSize={25}
              // rows={WeldRow}
              // columns={WeldColumn}
              checkboxSelection
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography variant="caption" color="primary">
            결과조치
          </Typography>
          <StyledDivider />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ lineHeight: '40px' }}>
            조치분류
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <NativeSelect
            id="demo-customized-select-native"
            // value="value"
            sx={{ width: '100%' }}
            input={<StyledInputBase />}
          >
            <option value="단순조치">단순조치</option>
            <option value="일반조치">일반조치</option>
          </NativeSelect>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}></Grid>
      </Grid>
      <ReportButtons
        action02={() => navigate('/welder/report')}
        text01="취소"
        text02="완료"
      />
      {/* )} */}
    </Box>
  );
};

export default ImgBoardCheck;
