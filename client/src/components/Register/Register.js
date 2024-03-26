import React from 'react'
import { TextField, Box, Button, Radio, FormControlLabel, RadioGroup } from '@mui/material'
import CustomTextField from '../TextField/TextField'
import './Register.css'
import AutoComplete from '../AutoComplete/AutoComplete'

export default function Register() {
  return (
    <div className='r-main-container'>
        <h3 className='r-heading'>Basic Details</h3>
        <Box className='r-inputs-container' sx={{gap:'20px'}}>
            <CustomTextField label='Name'/>
            <CustomTextField label="Father's Name"/>
            <CustomTextField label="Mother's Name"/>
            <CustomTextField label='Eductation Level'/>
                <Box className='date-time-container'>
                    <TextField
                    label="DOB"
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
                    label="Age"
                    id="filled"
                    size="small"
                    placeholder='Calculate Age from DOB'
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
            <CustomTextField label='Mobile No.'/>   
            <CustomTextField label='Aadhar No.'/>     
        </Box>
        <h3 className='r-heading'>Address</h3>
        <Box className='r-inputs-container' sx={{gap:'20px'}}>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                //value={value}
                //onChange={handleChange}
                sx={{width:'50%', display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',}}
            >
                <FormControlLabel value="Rural" control={<Radio />} label="Rural" sx={{fontFamily:'Inter !important', fontSize:'20px', color:'#000'}}/>
                <FormControlLabel value="Urban" control={<Radio />} label="Urban" sx={{fontFamily:'Inter !important', fontSize:'20px', color:'#000'}}/>
            </RadioGroup>
            <CustomTextField label="Village"/>
            <Box className='r-date-time-container'>
               <AutoComplete label='Post Office' styles={{width:'48%'}}/>
                <AutoComplete label='Block'  styles={{width:'48%'}}/>
                <TextField
                    label="Panchayat"
                    id="filled"
                    size="small"
                    InputLabelProps={{
                    sx: { bgcolor: "#DBE2EF", borderRadius:'5px', fontSize:'15px', lineHeight:'20.25px', padding:'2px 8px 2px 8px', color:'#000'},
                    }}
                    className='r-textField2'
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
                    className='r-textField2'
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
            <Box sx={{width:'50%', marginBottom:'-20px'}}>
            <AutoComplete label='Job Role'/> 
            </Box>
            
        <Box className='date-time-container'>
           <TextField
          label="Photo"
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
          label="Aadhar"
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
        <CustomTextField label='Any Query?'/>     
        </Box>
        <Box sx={{width:'100%', marginTop:'34px', marginBottom:'54px',textAlign:'center'}}>
          <Button variant="contained" className='r-submit-btn'>
            Submit
          </Button>
      </Box>
    </div>
  )
}
