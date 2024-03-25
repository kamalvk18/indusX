import React from 'react'
import {TextField, Box, Button} from '@mui/material'
import Autocomplete from '../AutoComplete/AutoComplete'
import CustomTextField from '../TextField/TextField'

import "./CreateCamp.css"

export default function CreateCamp() {
  return (
    <div className='cc-main-container'>
      <h3 className='cc-heading'>Basic Details</h3>
      <Box className='inputs-container' sx={{gap:'20px'}}>
        <CustomTextField label='Name'/>
        <CustomTextField label='Sponsored'/>
        <CustomTextField label='Agency'/>
        <CustomTextField label='Event Title'/>
          <Box className='date-time-container'>
          <TextField
          label="Date"
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
        <CustomTextField  label='Address' multiline={true}/>
          <Box className='date-time-container'>
            <Autocomplete label='District' />
            <Autocomplete label='Block'/>
           <TextField
          label="Panchayat"
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
      <CustomTextField label='Name'/>
      <CustomTextField label='Details'/>
      </Box>
      <Box sx={{width:'100%', marginTop:'34px', marginBottom:'54px',textAlign:'center'}}>
          <Button variant="contained" className='submit-btn'>
            Submit
          </Button>
      </Box>
      
    </div>
  )
}
