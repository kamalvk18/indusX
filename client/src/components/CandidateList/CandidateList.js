import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import './CandidateList.css'
import {
  InputAdornment,
  TextField,
} from '@material-ui/core';
import './CandidateList.css'

const tableHeaders = [
  'S.No', 'Name', 'Candidate ID', 'Mobile  No.', 'Aadhar No.', 'Status', 'Action'
]
const rowData =  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty','Empty',]

const useStyles = makeStyles(() => ({
  textField:{
    width:'45%',
    marginTop:'45px',
    marginBottom:'39px',
  },
}));


export default function CandidateList() {
  const classes = useStyles()
  return (
    <div className='cl-main-container'>
       <TextField
        className={classes.textField}
        variant='outlined'
        InputProps={{
          style:{borderColor:'#707C8B', background:'#ffffff', borderRadius:'10px', height:'46px', border:'1px solid #707C8B'},
          endAdornment: (
            <InputAdornment>
              <SearchIcon  size='small'/>
            </InputAdornment>
          ),
          
        }}
        sx={{
          "& label.Mui-focused": {
            color: "#707C8B",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#707C8B",
            },
            "&:hover fieldset": {
              borderColor: "#707C8B",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#707C8B",
            },
          },
        }}

        //onChange={handleSearchChange}
      />
        <h3 className='cl-heading'>Cadidate List</h3> 
      <CustomTable rows={rowData} tableHeaders={tableHeaders}/>
    </div>
  )
}
