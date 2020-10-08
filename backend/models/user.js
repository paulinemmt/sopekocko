const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
});

userSchema.plugin(uniqueValidator); //email unique

module.exports = mongoose.model('User', userSchema);