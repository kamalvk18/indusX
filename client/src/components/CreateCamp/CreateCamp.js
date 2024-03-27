import React,{useState} from 'react'
import {TextField, Box, Button} from '@mui/material'
import Autocomplete from '../AutoComplete/AutoComplete'
import CustomTextField from '../TextField/TextField'

import "./CreateCamp.css"

export default function CreateCamp() {
  const [formData, setFormData] = useState({
    schemeName: '',
    sponsoredAgency: '',
    eventTitle: '',
    date: '',
    time: '',
    address: '',
    district: '',
    block: '',
    panchayat: '',
    landmark: '',
    guestName: '',
    guestDetails: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    try {
      // Send formData to the backend using fetch or Axios
      const response = await fetch('http://localhost:5000/createCamp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Handle response as needed
      console.log('Form submitted successfully', response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleAutocompleteChange = (name, value) => {
    console.log(value)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.label,
    }));
  };

  return (
    <form className='cc-main-container' onSubmit={handleSubmit}>
      <h3 className='cc-heading'>Basic Details</h3>
      <Box className='inputs-container' sx={{gap:'20px'}}>
        <CustomTextField label='Scheme Name' name='schemeName' value={formData.schemeName} handleChange={handleChange} />
        <CustomTextField label='Sponsored Agency' name='sponsoredAgency' value={formData.sponsoredAgency} handleChange={handleChange} />
        <CustomTextField label='Event Title' name='eventTitle' value={formData.eventTitle} handleChange={handleChange} />
          <Box className='date-time-container'>
          <TextField
          label="Date"
          name='date'
          value={formData.date}
          onChange={handleChange}
          id="filled"
          size="small"
          type='date'
          InputLabelProps={{
            sx: { bgcolor: "#DBE2EF", borderRadius:'5px', fontSize:'15px', lineHeight:'20.25px', padding:'2px 8px 2px 8px', color:'#000'},
          }}
          className='textField2'
          InputProps={{
            style:{borderColor:'#707C8B'}
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#000",
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
          focused
          />
          <TextField
          label="Time"
          name='time'
          value={formData.time}
          onChange={handleChange}
          id="filled"
          type='time'
          size="small"
          InputLabelProps={{
            sx: { bgcolor: "#DBE2EF", borderRadius:'5px', fontSize:'15px', lineHeight:'20.25px', padding:'2px 8px 2px 8px', color:'#000'},
          }}
          className='textField2'
          InputProps={{
            style:{borderColor:'#707C8B'}
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#000",
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
          focused
          />
          </Box>
      </Box>
      <h3 className='cc-heading'>Venue</h3>
      <Box className='inputs-container' sx={{gap:'20px'}}>
        <CustomTextField  label='Address' multiline={true} name='address' value={formData.address} onChange={handleChange}/>
          <Box className='date-time-container'>
           <Autocomplete label='District' name='district' value={formData.district}
            onChange={(value) => handleAutocompleteChange('district', value)}/>
            <Autocomplete label='Block' name='block' value={formData.block}
            onChange={(value) => handleAutocompleteChange('block', value)}/>
           <TextField
          label="Panchayat"
          name='panchayat'
          value={formData.panchayat}
          onChange={handleChange}
          id="filled"
          size="small"
          InputLabelProps={{
            sx: { bgcolor: "#DBE2EF", borderRadius:'5px', fontSize:'15px', lineHeight:'20.25px', padding:'2px 8px 2px 8px', color:'#000'},
          }}
          className='textField2'
          InputProps={{
            style:{borderColor:'#707C8B'}
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#000",
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
          focused
          />
           <TextField
          label="Landmark"
          name='landmark'
          value={formData.landmark}
          onChange={handleChange}
          id="filled"
          size="small"
          InputLabelProps={{
            sx: { bgcolor: "#DBE2EF", borderRadius:'5px', fontSize:'15px', lineHeight:'20.25px', padding:'2px 8px 2px 8px', color:'#000'},
          }}
          className='textField2'
          InputProps={{
            style:{borderColor:'#707C8B'}
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#000",
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
          focused
          />
          </Box>
      </Box>
      <h3 className='cc-heading'>Guest</h3>
      <Box className='inputs-container' sx={{gap:'20px'}}>
      <CustomTextField label='Name' name='guestName' value={formData.guestName} onChange={handleChange} />
      <CustomTextField label='Details' name='guestDetails' value={formData.guestDetails} onChange={handleChange}/>
      </Box>
      <Box sx={{width:'100%', marginTop:'34px', marginBottom:'54px',textAlign:'center'}}>
          <Button variant="contained" className='submit-btn' type='submit'>
            Submit
          </Button>
      </Box>
    </form>
  )
}