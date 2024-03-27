const mongoose = require('mongoose');
const campSchema = new mongoose.Schema({
    schemeName: String,
    sponsoredAgency: String,
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

const Camp = mongoose.model('Camp', campSchema);
module.exports = Camp;