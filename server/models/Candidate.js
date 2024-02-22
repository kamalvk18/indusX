const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  serialNum: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true
  },
  locationType:{
    type: String,
    required: true
  },
// Ward number is only mandatory if loc type is urban
  wardNumber: Number,
// Below 3 are mandatory only mandatory if loc type is rural
  village: String,
  panchayat: String,
  postOffice: String,
  block: {
    type: String,
    required: true,
  },
  pincode:{
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  fathersName: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  jobPreference: String,
  mobileNumber: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  photograph: {
    type: String, 
  },
  aadharPhoto: {
    type: String,
  },
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;