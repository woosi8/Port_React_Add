import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Divider,
  Typography
} from '@mui/material';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const TableMaking = () => {
  const selections = [
    {
      id: 1,
      selection: 'Select'
    },
    {
      id: 2,
      selection: 'Text'
    },
    {
      id: 3,
      selection: 'Image'
    }
  ];

  const [columnValue, setColumnValue] = useState('');
  const [column, setColumn] = useState([]);
  const [table, setTable] = useState();
  const [rowCount, setRowCount] = useState(1);

  const handleAddColumn = () => {
    setColumn((oldArray) => [...oldArray, columnValue]);
    setColumnValue('');
  };

  const handleRemoveColumn = (idx) => {
    const temp = [...column];
    temp.splice(idx, 1);
    setColumn(temp);
  };

  const handleChangeColumnValue = (e) => {
    setColumnValue(e.target.value);
    setColumn((oldArray) => [...oldArray, e.target.value]);
    setColumnValue('');
  };
  // function tabelReset() {
  //   setRowCount(0);
  //   makeTable();
  // }

  const makeTable = () => {
    let count = [];
    for (var i = 0; i < rowCount; i++) {
      count.push('c');
    }

    setTable(
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {column.map((c, index) => (
                <TableCell key={index}>
                  <TextField
                    id="filled-search"
                    label={c}
                    type="search"
                    variant="filled"
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {count.map((c, idx) => (
              <TableRow key={idx}>
                {column.map((subc, index) => (
                  <TableCell key={index}>
                    {subc === 'Select' ? (
                      <TextField
                        key={index}
                        id="select"
                        label="Age"
                        value="20"
                        select
                      >
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                      </TextField>
                    ) : subc === 'Text' ? (
                      <TextField key={index} />
                    ) : (
                      subc === 'Image' && (
                        <input
                          type="file"
                          accept="image/jpg,impge/png,image/jpeg,image/gif"
                          name="profile_img"
                          // onChange={handleFileOnChange}
                        ></input>
                      )
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <>
      {/* <TextField value={columnValue} onChange={handleChangeColumnValue} /> */}

      <Select
        id="columnValue"
        name="columnValue"
        value={columnValue}
        sx={{ width: '50%' }}
        // value={selections.selction}
        onChange={handleChangeColumnValue}
      >
        {selections.map((selection, index) => (
          <MenuItem key={index} value={selection.selection}>
            {selection.selection}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" color="success" onClick={makeTable}>
        테이블생성
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setColumn([])}
      >
        리셋
      </Button>
      <Button variant="contained" onClick={handleAddColumn}>
        컬럼추가
      </Button>
      <Typography>열 개수 : {rowCount}</Typography>
      <Button
        variant="contained"
        color="info"
        onClick={() => setRowCount(rowCount + 1)}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => setRowCount(rowCount - 1)}
      >
        -
      </Button>
      <br />
      <Box
        sx={{
          border: '1px solid',
          padding: '1rem'
        }}
      >
        {column.map((c, idx) => (
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
        ))}
      </Box>

      {/* <Button
        variant="contained"
        color="secondary"
        onClick={() => tabelReset()}
        // onClick={() => setRowCount(0)}
      >
        테이블리셋
      </Button> */}
      <br />
      <br />
      <Divider />
      <br />
      <br />

      {table}
    </>
  );
};

export default TableMaking;
