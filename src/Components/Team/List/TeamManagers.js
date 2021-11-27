import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { SearchOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { InputAdornment, InputBase } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link as RouteLink } from 'react-router-dom';
import { Avatar } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  // color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '50px'
}));

const StyledSearchBox = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.grey.A200,
  borderRadius: '50px',
  padding: '0 10px 0 10px',
  border: '1px solid',
  borderColor: theme.palette.grey.A200,
  transition: theme.transitions.create(['background-color', 'border'], {
    duration: theme.transitions.duration.search
  }),
  '&.Mui-focused': {
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: theme.palette.primary.main
  }
}));
function createData(id, name, email, phonNumber, company, edit) {
  return {
    id,
    name,
    email,
    phonNumber,
    company,
    edit
  };
}

const rows = [
  createData(
    1,
    '김모씨',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(
    2,
    '이라씨',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(
    3,
    '박씨',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(
    4,
    '최씨',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(
    5,
    '오씨',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(
    6,
    '김이',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(
    7,
    '김씨',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(
    8,
    '서문씨',
    'abcdfdfdsf@naver.com',
    '010-0200-0200',
    '삼성물산주식회사'
  ),
  createData(9, '조씨', 518, 26.0, 65, 7.0),
  createData(10, '김이박', 392, 0.2, 98, 0.0),
  createData(11, '호씨', 318, 0, 81, 2.0),
  createData(12, '우씨', 360, 19.0, 9, 37.0),
  createData(13, '정씨', 437, 18.0, 63, 4.0)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name'
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email'
  },
  {
    id: 'phonNumber',
    numeric: false,
    disablePadding: false,
    label: 'Phon-number'
  },
  {
    id: 'company',
    numeric: false,
    disablePadding: false,
    label: 'Company'
  },

  {
    id: 'edit',
    numeric: false,
    disablePadding: false,
    label: 'Edit'
  }
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{ pl: 4 }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            )
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h3"
          id="tableTitle"
          component="div"
        >
          Managers
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon color="primary" />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function TeamManagers() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('project');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [orows, setoRows] = useState(rows);

  const handleChange = (event) => {
    const searchedval = event.target.value;
    const filteredRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(searchedval.toLowerCase());
    });
    setoRows(filteredRows);
  };

  // const cancelSearch = () => {
  //   setSearched('');
  //   requestSearch(searched);
  // };

  return (
    <>
      <StyledToolbar>
        <EnhancedTableToolbar numSelected={selected.length} />

        <Tooltip title="Filter list">
          {/* <FilterAltIcon /> */}
          {/* <SearchIcon /> */}
          <StyledSearchBox
            placeholder="Search..."
            name="name"
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            }
          />
        </Tooltip>
      </StyledToolbar>
      <Box sx={{ width: '85%', m: '0 auto' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          {/* <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            style={{
              width: '50%',
              margin: '0 0 0 auto'
            }}
          /> */}

          <TableContainer>
            {/* <TableContainer sx={{ padding: '0 20px' }}> */}
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(orows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ height: '80px' }}
                      >
                        <TableCell padding="checkbox" sx={{ pl: 4 }}>
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Box display="flex" alignItems="center">
                            <Avatar
                              width="35"
                              sx={{
                                borderRadius: '100%',
                                marginRight: '10px',
                                ml: 1
                              }}
                            />
                            <Typography variant="h7" fontWeight="600">
                              {row.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phonNumber}</TableCell>
                        <TableCell>{row.company}</TableCell>
                        <TableCell sx={{ pl: 3, pr: 6 }}>
                          <RouteLink
                            to="usersAccount"
                            style={{ textDecoration: 'none' }}
                          >
                            <BorderColorIcon color="primary" />
                          </RouteLink>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
