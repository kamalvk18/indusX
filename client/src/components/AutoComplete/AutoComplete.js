import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './AutoComplete.css'

export default function AutoComplete(props) {
  const {label, styles } = props
  const [value, setValue] = React.useState(props.value || null)

  const handleInputChange= (event, value) => {
      setValue(value)
      props.handleAutocompleteChange(props.name, value)
  }

  return (
    <Autocomplete
    value={value}
    name={props.name}
     onChange={handleInputChange}
     className='autocomplete'
      disablePortal
      id="combo-box-demo"
      style={styles}
      options={top100Films}
      getOptionLabel={(option) => option.label}
      sx={{ '& .MuiOutlinedInput-root':{padding:'0'}}}
      renderInput={(params) => 
      <TextField 
      {...params  }
      label={label}
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
          bgcolor: "#DBE2EF", 
          borderRadius:'5px', 
          fontSize:'15px', 
          lineHeight:'20.25px', 
          padding:'2px 8px 2px 8px',
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
        {...params}   
         />}
    />
  );
}


const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
