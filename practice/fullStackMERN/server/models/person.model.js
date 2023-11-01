const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    fName: { type: String },
    lName: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Person', PersonSchema);  