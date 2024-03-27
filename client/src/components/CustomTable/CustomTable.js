import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';

import './CustomTable.css'

const useStyles = makeStyles({
  tableContainer: {
    width: '90%',
    borderRadius: '4px',
    border:'1px solid #5B5B5B'
  },
});



export default function CustomTable(props) {
    const classes = useStyles()
    const {rows, tableHeaders} = props
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead sx={{ background: "#DBE2EF", height:'70px' }}>
          <TableRow className="table-header-row">
          {
            tableHeaders.map((item, index) => (
              <TableCell key = {index} sx={{ borderRight: "1px solid #5B5B5B", borderBottom:'1px solid #5B5B5B' }} className="table-cell">
              {item}
            </TableCell>
            ))
          }
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              sx={{ "&:last-child td, &:last-child th": { borderBottom:'none',}, height:'70px' }}
            >
          {rows.map((row) => (
           
              <TableCell
                component="th"
                scope="row"
                sx={{ borderWidth:'1px 1px 1px 1px', borderColor:'#5B5B5B',  borderRight: "1px solid #5B5B5B" }}
              >
               (Empty)
              </TableCell>  
       
          ))}
               </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
