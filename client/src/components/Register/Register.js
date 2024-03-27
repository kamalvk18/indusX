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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    try {
      // Send formData to the backend using fetch or Axios
      const response = await fetch('backend-api', {
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
        <CustomTextField label='Name' name="name" value={formData.name} handleChange={handleChange}/>
        <CustomTextField label="Father's Name" name="fatherName" value={formData.fatherName} handleChange={handleChange} />
        <CustomTextField label="Mother's Name" name="motherName" value={formData.motherName} handleChange={handleChange}/>
        <CustomTextField label='Eductation Level' name="educationLevel" value={formData.educationLevel} handleChange={handleChange} />
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
        <CustomTextField label='Mobile No.' type="tel"
        maxLength="10" name='mobileNo' value={formData.mobileNo} handleChange={handleChange}/>
        <CustomTextField label='Aadhar No.' type='number' name='aadharNo' value={formData.aadharNo} handleChange={handleChange}/>
      </Box>
      <h3 className='r-heading'>Address</h3>
      <Box className='r-inputs-container' sx={{ gap: '20px' }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="addressType"
          value={formData.addressType}
          onChange={handleChange}
          sx={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}
        >
          <FormControlLabel value="Rural" control={<Radio />} label="Rural" sx={{ fontFamily: 'Inter !important', fontSize: '20px', color: '#000' }} />
          <FormControlLabel value="Urban" control={<Radio />} label="Urban" sx={{ fontFamily: 'Inter !important', fontSize: '20px', color: '#000' }} />
        </RadioGroup>
        {formData.addressType === 'Urban' ? (
          <>
            <CustomTextField label="Address" name="address" multiline={true} value={formData.address} handleChange={handleChange} />
            <CustomTextField label="Ward Number" name="wardNumber" value={formData.wardNumber} handleChange={handleChange} />
            <CustomTextField label="Block" name="block" value={formData.block} handleChange={handleChange}/>
            <CustomTextField label="Landmark" name="landmark" value={formData.landmark} handleChange={handleChange} />
            <CustomTextField label="District" name="district" value={formData.district} handleChange={handleChange} />
            <CustomTextField label="State" name="state" value={formData.state} handleChange={handleChange} />
          </>
        ) : (
          <>
            <CustomTextField label="Village" multiline={true} name="village" value={formData.village} handleChange={handleChange}/>
            <CustomTextField label="Panchayat" name="panchayat" value={formData.panchayat} handleChange={handleChange} />
            <CustomTextField label="Post Office" name="postOffice" value={formData.postOffice} handleChange={handleChange} />
            <CustomTextField label="Block" name="block" value={formData.block} handleChange={handleChange}/>
            <CustomTextField label="Landmark" name="landmark" value={formData.landmark} handleChange={handleChange} />
          </>
        )}
        <CustomTextField label='Preferred Job Role' name="preferredJobRole" value={formData.preferredJobRole} handleChange={handleChange}/>
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
        <CustomTextField label='Any Query?' multiline={true} name="anyQuery" value={formData.anyQuery} handleChange={handleChange} />     
        </Box>
        <Box sx={{width:'100%', marginTop:'34px', marginBottom:'54px',textAlign:'center'}}>
          <Button variant="contained" className='r-submit-btn' onClick={handleFormSubmit}>
            Submit
          </Button>
      </Box>
    </div>
  )
}
