const mongoose = require('mongoose');
const campSchema = new mongoose.Schema({
    name: String,
    sponsored: String,
    agency: String,
    eventTitle: String,
    date: Date,
    time: String,
    address: String,
    district: String,
    block: Number,
    panchayat: String,
    landmark: String,
    guestName: String,
    guestDetails: String,
});

campSchema.pre('save', function(next) {
  if (this.date && typeof(this.date) === 'string') {
    // Convert the date string to a Date object (assuming the format is dd-mm-yyyy)
    this.date = new Date(
      this.date.split('-').reverse().join('-')
    );
  }
  next();
});

const Camp = mongoose.model('Camp', campSchema);
module.exports = Camp;