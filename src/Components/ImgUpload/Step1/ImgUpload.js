/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, styled, Typography, Button, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  maxHeight: '50vh',
  minHeight: '50vh',
  objectFit: 'fill'
}));

const StyledBtn = styled(Button)(({ theme }) => ({
  width: '100%',
  maxHeight: '50vh',
  minHeight: '50vh',
  textTransform: 'none',
  border: '1px solid red'
}));

const ImgUpload = () => {
  const [value, setValue] = React.useState('1');
  const [imgFile, setImgFile] = useState(null); //  비표 파일

  const handleChangeFile = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledBox
      component="div"
      sx={{
        // p: 2,
        border: '1px dashed grey',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <StyledBtn component="label" variant="contained" color="primary">
        <Stack direction="column" alignItems="center">
          <Typography variant="h5">사진을 업로드 해주세요</Typography>
          <AddCircleOutlineIcon fontSize="large" />
        </Stack>
        <input
          type="file"
          name="imgpath"
          id="imgpath"
          hidden
          // onChange={handleChangeFile}
        />
      </StyledBtn>
    </StyledBox>
  );
};

export default ImgUpload;
