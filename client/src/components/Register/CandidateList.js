import React, { useState } from 'react';
import { TextField, Table, TableHead, TableBody, TableCell, TableRow, IconButton, InputAdornment, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import './CandidateList.css'; 

const data = [
  { id: 1, name: 'John Doe', candidateId: '001', mobileNo: '1234567890', aadharNo: '123456789012', status: 'Registered' },
  // Add more data objects as needed
];

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
        // border: `1px solid #112D4E`,
        borderRadius: theme.spacing(1),
        '& th': {
          backgroundColor: '#DBE2EF',
        },
        '& td': {
          backgroundColor: '#FFFFFF',
        },
      },
  }));

const CandidateList = () => {
    const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(candidate => candidate.candidateId.includes(searchTerm));

  return (
    <div className='candidate-list'>
      <div className='searchBox'>
        {/* <SearchIcon /> */}
        <TextField
          style={{ marginTop: '30px'}}
          variant="outlined"
          label="Search by Candidate ID"
          onChange={handleSearchChange}
          InputProps={{ 
            startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),style: { borderRadius: 20 } }}
        />
      </div>
      
      <Paper className='table-container'>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Candidate ID</TableCell>
            <TableCell>Mobile No.</TableCell>
            <TableCell>Aadhar No.</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.candidateId}</TableCell>
              <TableCell>{row.mobileNo}</TableCell>
              <TableCell>{row.aadharNo}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <IconButton aria-label="edit">
                <EditIcon />
                </IconButton>
                <IconButton aria-label="view">
                <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
    </div>
  );
};

export default CandidateList;
