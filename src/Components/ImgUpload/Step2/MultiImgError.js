import React from 'react';
// import React, { useState, useEffect } from 'react';
import { Box, styled, Typography, Button, Stack } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  objectFit: 'fill'
}));
const StyledBtn = styled(Button)(({ theme }) => ({
  width: '100%',
  textTransform: 'none',
  border: '1px solid red',
  backgroundColor: theme.palette.grey[500]
}));

const MultiImgError = () => {
  return (
    <StyledBox
      component="div"
      sx={{
        border: '1px dashed grey',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        opacity: '1',
        height: '99%',
        backgroundColor: ' rgba(0, 0, 0, 0.5)'
      }}
    >
      <StyledBtn
        component="label"
        variant="contained"
        sx={{}}
        // color="grey(50)"
        disabled
      >
        <Stack direction="column" alignItems="center">
          <CancelIcon fontSize="large" color="error" />
          <Typography variant="h5" sx={{ marginTop: '2vw', color: 'red' }}>
            비드가 인식되지 않았습니다.
            <br />
            사진을 다시 업로드해주세요.
          </Typography>
        </Stack>
      </StyledBtn>
    </StyledBox>
  );
};

export default MultiImgError;
