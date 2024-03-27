import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';

import './Table.css'



const useStyles = makeStyles({
  tableContainer: {
    width: '90%',
    borderRadius: '4px',
    border:'1px solid #5B5B5B'
  },
});

export default function BasicTable(props) {
    const classes = useStyles()
    const {rows} = props
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead sx={{ background: "#DBE2EF", height:'70px' }}>
          <TableRow className="table-header-row">
            <TableCell sx={{ borderRight: "1px solid #5B5B5B", borderBottom:'1px solid #5B5B5B' }} className="table-cell">
              Serial Number
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #5B5B5B", borderBottom:'1px solid #5B5B5B' }} className="table-cell" align="left">
              Candidate ID
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #5B5B5B", borderBottom:'1px solid #5B5B5B' }} className="table-cell" align="left">
              Name
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #5B5B5B", borderBottom:'1px solid #5B5B5B' }} className="table-cell" align="left">
              Father's Name
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #5B5B5B", borderBottom:'1px solid #5B5B5B' }} className="table-cell" align="left">
              Action
            </TableCell>
            <TableCell sx={{ borderBottom:'1px solid #5B5B5B'  }} className="table-cell" align="left">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.srNo}
              sx={{ "&:last-child td, &:last-child th": { borderBottom:'none'}, height:'70px' }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ borderWidth:'1px 1px 1px 1px', borderColor:'#5B5B5B',  borderRight: "1px solid #5B5B5B" }}
              >
                {row.srNo}
              </TableCell>
              <TableCell sx={{ borderWidth:'1px 0px 1px 1px', borderColor:'#5B5B5B',  borderRight: "1px solid #5B5B5B" }} align="right">
                {row.id}
              </TableCell>
              <TableCell  sx={{ borderWidth:'1px 0px 1px 1px', borderColor:'#5B5B5B',  borderRight: "1px solid #5B5B5B" }} align="right">
                {row.name}
              </TableCell>
              <TableCell  sx={{ borderWidth:'1px 0px 1px 1px', borderColor:'#5B5B5B',  borderRight: "1px solid #5B5B5B" }} align="right">
                {row.fatherName}
              </TableCell>
              <TableCell  sx={{ borderWidth:'1px 0px 1px 1px', borderColor:'#5B5B5B',  borderRight: "1px solid #5B5B5B" }} align="right">
                {row.action}
              </TableCell>
              <TableCell  sx={{ borderWidth:'1px 0px 1px 1px', borderColor:'#5B5B5B',}} align="right">
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
