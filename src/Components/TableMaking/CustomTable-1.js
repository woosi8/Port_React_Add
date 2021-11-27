import { TextField, Box, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import MenuItem from '@mui/material/MenuItem';

const CustomTable = ({ column, handleRemoveColumn, setOptionTable }) => {
  const [selOption, setSelOptions] = useState('');
  const handleSelOption = (e) => {
    setSelOptions(e.target.value);
  };

  const handleSetOption = (e) => {
    setOptionTable((o) => [...o, selOption]);
  };
  return (
    <Box
      sx={{
        border: '1px solid',
        padding: '1rem'
      }}
    >
      {column.map((c, idx) => {
        console.log(c);
        if (c === 'Select') {
          return (
            <div key={idx}>
              {/* <form onSubmit={}> */}
              <TextField
                size="small"
                placeholder={c}
                sx={{
                  maxWidth: '100%'
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveColumn(idx)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                required
                sx={{
                  maxWidth: '100%'
                }}
                label="쉼표(,)로 구분"
                onChange={handleSelOption}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        // onClick={() =>
                        //   setOptionTable(
                        //     selOption
                        //       .split(',')
                        //       .filter(Boolean)
                        //       .map((option, idx) => {
                        //         return (
                        //           <MenuItem key={idx} value={option}>
                        //             {option}
                        //           </MenuItem>
                        //         );
                        //       })
                        //   )
                        // }
                        onClick={handleSetOption}
                      >
                        <CheckBoxIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              {/* <Button type="submit"></Button> */}
              {/* </form> */}
            </div>
          );
        } else {
          return (
            <TextField
              size="small"
              placeholder={c}
              sx={{
                Width: '5rem',
                maxWidth: '100%'
              }}
              key={idx}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveColumn(idx)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          );
        }
      })}
    </Box>
  );
};

export default CustomTable;
