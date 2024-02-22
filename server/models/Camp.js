const mongoose = require('mongoose');
const campSchema = new mongoose.Schema({
    schemeName: String,
    sponsoredAgency: String,
    eventTitle: String,
    date: Date,
    venue: String,
    guest: String,
    guestDesignation: String
  });
const Camp = mongoose.model('Camp', campSchema);  

module.exports = Camp;