import React,{useEffect,useState} from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './CandidateList.css'
import {
  InputAdornment,
  TextField,
} from '@material-ui/core';
import './CandidateList.css'

const tableHeaders = [
  'S.No', 'Name', 'Candidate ID', 'Mobile  No.', 'Aadhar No.', 'Status', 'Action'
]


const useStyles = makeStyles(() => ({
  textField:{
    width:'45%',
    marginTop:'45px',
    marginBottom:'39px',
  },
}));


export default function CandidateList() {
  const classes = useStyles()
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('backend-api');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (candidateId) => {
    // Handle edit action here, navigate to edit page
    console.log('Edit candidate with ID:', candidateId);
  };

  const handleView = (candidateId) => {
    // Handle view action here, navigate to view page
    console.log('View candidate with ID:', candidateId);
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
        <h3 className='cl-heading'>Cadidate List</h3> 
      <CustomTable rows={candidates.map((candidate, index) => ({
          ...candidate,
          Action: (
            <div>
              <EditIcon style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleEdit(candidate._id)} />
              <VisibilityIcon style={{ cursor: 'pointer' }} onClick={() => handleView(candidate._id)} />
            </div>
          )
        }))} 
        tableHeaders={tableHeaders} />
    </div>
  )
}

