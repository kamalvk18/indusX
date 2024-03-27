import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'

import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
  InputAdornment,
  TextField,
} from '@material-ui/core';
import './CampList.css'

const rowData = [
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
  {srNo: '', id:'', name:"", fatherName:'', action:'', status:''},
]

const useStyles = makeStyles(() => ({
  textField:{
    width:'45%',
    marginTop:'45px',
    marginBottom:'39px',
  },
}));


export default function CampList() {
  const classes = useStyles()
  return (
    <div className='cl-main-container'>
       <TextField
        className={classes.textField}
        variant='outlined'
        InputProps={{
          style:{borderColor:'#707C8B', background:'#ffffff', borderRadius:'10px', height:'56px !important', border:'1px solid #707C8B'},
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
      <CustomTable rows={rowData}/>
    </div>
  )
}
