import React, { useState } from 'react';
import { TextField, Box, Button, Radio, FormControlLabel, RadioGroup } from '@mui/material';
import CustomTextField from '../TextField/TextField';
import './Register.css';

export default function Register() {

  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    educationLevel: '',
    dob: '',
    age: '',
    mobileNo: '',
    aadharNo: '',
    addressType: 'Urban',
    address: '',
    wardNumber: '',
    block: '',
    landmark: '',
    district: '',
    state: '',
    village: '',
    panchayat: '',
    postOffice: '',
    preferredJobRole: '',
    photo: null,
    aadharImage: null,
    anyQuery: '',
  });

  const handleFormSubmit = async () => {
    try {
      // Send formData to the backend using fetch or Axios
      const response = await fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Handle response as needed
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('Error:', error); 
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const handleDOBChange = (event) => {
    const dobValue = event.target.value;
    setFormData({ ...formData, dob: dobValue, age: calculateAge(dobValue) });
  };

  const handlePhotoChange = (event) => {
    setFormData({ ...formData, photo: event.target.files[0] });
  };

  const handleAadharImageChange = (event) => {
    setFormData({ ...formData, aadharImage: event.target.files[0] });
  };

  return (
    <div className='r-main-container'>
      <h3 className='r-heading'>Basic Details</h3>
      <Box className='r-inputs-container' sx={{ gap: '20px' }}>
        <CustomTextField label='Name' name="name" value={formData.name} onChange={handleInputChange}/>
        <CustomTextField label="Father's Name" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />
        <CustomTextField label="Mother's Name" name="motherName" value={formData.motherName} onChange={handleInputChange}/>
        <CustomTextField label='Eductation Level' name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} />
        <Box className='date-time-container'>
          <TextField
            label="DOB"
            id="dob"
            size="small"
            type='date'
            name="dob"
            value={formData.dob}
            onChange={handleDOBChange}
            InputLabelProps={{
              sx: { bgcolor: "#DBE2EF", borderRadius: '5px', fontSize: '15px', lineHeight: '20.25px', padding: '2px 8px 2px 8px', color: '#000' },
            }}
            className='textField2'
            InputProps={{
              style: { borderColor: '#707C8B' }
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
            id="age"
            size="small"
            name="age"
            value={formData.age}
            InputProps={{
              readOnly: true,
              style: { borderColor: '#707C8B' },
            }}
            InputLabelProps={{
              sx: { bgcolor: "#DBE2EF", borderRadius: '5px', fontSize: '15px', lineHeight: '20.25px', padding: '2px 8px 2px 8px', color: '#000' },
            }}
            className='textField2'
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
        <CustomTextField label='Mobile No.' value={formData.mobileNo} onChange={handleInputChange}/>
        <CustomTextField label='Aadhar No.' value={formData.aadharNo} onChange={handleInputChange}/>
      </Box>
      <h3 className='r-heading'>Address</h3>
      <Box className='r-inputs-container' sx={{ gap: '20px' }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="addressType"
          value={formData.addressType}
          onChange={handleInputChange}
          sx={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}
        >
          <FormControlLabel value="Rural" control={<Radio />} label="Rural" sx={{ fontFamily: 'Inter !important', fontSize: '20px', color: '#000' }} />
          <FormControlLabel value="Urban" control={<Radio />} label="Urban" sx={{ fontFamily: 'Inter !important', fontSize: '20px', color: '#000' }} />
        </RadioGroup>
        {formData.addressType === 'Urban' ? (
          <>
            <CustomTextField label="Address" name="address" multiline={true} value={formData.address} onChange={handleInputChange} />
            <CustomTextField label="Ward Number" name="wardNumber" value={formData.wardNumber} onChange={handleInputChange} />
            <CustomTextField label="Block" name="block" value={formData.block} onChange={handleInputChange}/>
            <CustomTextField label="Landmark" name="landmark" value={formData.landmark} onChange={handleInputChange} />
            <CustomTextField label="District" name="district" value={formData.district} onChange={handleInputChange} />
            <CustomTextField label="State" name="state" value={formData.state} onChange={handleInputChange} />
          </>
        ) : (
          <>
            <CustomTextField label="Village" multiline={true} name="village" value={formData.village} onChange={handleInputChange}/>
            <CustomTextField label="Panchayat" name="panchayat" value={formData.panchayat} onChange={handleInputChange} />
            <CustomTextField label="Post Office" name="postOffice" value={formData.postOffice} onChange={handleInputChange} />
            <CustomTextField label="Block" name="block" value={formData.block} onChange={handleInputChange} />
            <CustomTextField label="Landmark" name="landmark" value={formData.landmark} onChange={handleInputChange} />
          </>
        )}
        <CustomTextField label='Preferred Job Role' name="preferredJobRole" value={formData.preferredJobRole} onChange={handleInputChange}/>
        <Box className='date-time-container'>
          <TextField
            label="Photo"
            type="file"
            id="filled"
            size="small"
            name="photo"
            onChange={handlePhotoChange}
            InputLabelProps={{
              sx: { bgcolor: "#DBE2EF", borderRadius: '5px', fontSize: '15px', lineHeight: '20.25px', padding: '2px 8px 2px 8px', color: '#000' },
            }}
            className='textField2'
            InputProps={{
              style: { borderColor: '#707C8B' }
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
          type="file"
          id="filled"
          size="small"
          name="aadharImage"
          onChange={handleAadharImageChange}
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
        <CustomTextField label='Any Query?' multiline={true} name="anyQuery" value={formData.anyQuery} onChange={handleInputChange} />     
        </Box>
        <Box sx={{width:'100%', marginTop:'34px', marginBottom:'54px',textAlign:'center'}}>
          <Button variant="contained" className='r-submit-btn' onClick={handleFormSubmit}>
            Submit
          </Button>
      </Box>
    </div>
  )
}
