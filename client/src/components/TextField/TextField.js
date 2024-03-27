import React from 'react'
import { TextField } from '@mui/material'

export default function CustomTextField(props) {
  
  const handleInputChange = (event) => {
    props.handleChange(event)
  }
  
  return (
    <TextField
         value={props.value}
         name={props.name}
         onChange={handleInputChange}
          id="filled"
          size="small"
          InputLabelProps={{
            sx: { bgcolor: "#DBE2EF", borderRadius:'5px', fontSize:'15px', lineHeight:'20.25px', padding:'2px 8px 2px 8px', color:'#000'},
          }}
          className='textField'
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
          {...props}
          />
  )
}
