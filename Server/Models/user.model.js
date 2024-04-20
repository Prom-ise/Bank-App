const mongoose = require('mongoose');


userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: {type: String, required: true},
})

const userMode = new mongoose.model('userMode', userSchema);

module.exports = userMode;