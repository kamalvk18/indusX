import React,{useEffect,useState} from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
  InputAdornment,
  TextField,
} from '@material-ui/core';
import './CampList.css'

const tableHeaders = [
  'Scheme name', 'Sponsored agency', 'Event title', 'Date', 'Venue', 'Guest', 'Status'
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
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/getCamps');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRowData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
      <CustomTable rows={rowData} tableHeaders={tableHeaders}/>
    </div>
  )
}
