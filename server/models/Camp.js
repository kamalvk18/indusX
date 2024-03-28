const mongoose = require('mongoose');
const campSchema = new mongoose.Schema({
    schemeName: {
        type: String,
        required: true,
    },
    sponsoredAgency: {
        type: String,
        required: true,
    },
    eventTitle: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    block: {
        type: Number,
        required: true,
    },
    panchayat: {
        type: String,
        required: true,
    },
    landmark: String,
    guestName: String,
    guestDetails: String,
});

const Camp = mongoose.model('Camp', campSchema);
module.exports = Camp;