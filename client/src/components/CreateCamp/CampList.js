import React, { useState } from 'react';
import "./CampList.css"
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
  InputAdornment,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Badge,
  Paper
} from '@material-ui/core';

const data = [
  { schemeName: 'Scheme 1', sponsoredAgency: 'Agency A', eventTitle: 'Event A', date: '2024-03-26', venue: 'Venue A', guest: 'Guest A', status: 'Success' },
  { schemeName: 'Scheme 2', sponsoredAgency: 'Agency B', eventTitle: 'Event B', date: '2024-03-27', venue: 'Venue B', guest: 'Guest B', status: 'Fail' },
  // Add more data as needed
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
  table: {
    minWidth: 700,
  },
}));

const CampList = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='camp-list'>
      <TextField
        style={{ marginTop: '30px'}}
        className={classes.root}
        label="Search By Event Title"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { borderRadius: 20}
        }}
        onChange={handleSearchChange}
      />
      <Paper className='table-container'>
        <Table className={classes.table}>
          <TableHead style={{ backgroundColor: '#DBE2EF' }}>
            <TableRow>
              <TableCell>Scheme Name</TableCell>
              <TableCell>Sponsored Agency</TableCell>
              <TableCell>Event Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Guest</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.filter(item => item.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.schemeName}</TableCell>
                <TableCell>{row.sponsoredAgency}</TableCell>
                <TableCell>{row.eventTitle}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.venue}</TableCell>
                <TableCell>{row.guest}</TableCell>
                <TableCell>{row.status}</TableCell>

                {/* <TableCell>
                  <Badge color={row.status === 'Success' ? 'success' : 'error'} badgeContent={row.status} />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CampList;
