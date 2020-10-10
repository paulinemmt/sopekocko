////////////////////////////////MODELE USER//////////////////////////

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //email unique 

//création du schéma strict User
const userSchema = mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
});

// //limitation du nombre d'essai d'entrée du mot de passe
// userSchema.path('passwordHash').validate(function(v) {
//   if (this._password || this._passwordConfirmation) {
//     if (!val.check(this._password).min(6)) {
//       this.invalidate('password', 'must be at least 6 characters.');
//     }
//     if (this._password !== this._passwordConfirmation) {
//       this.invalidate('passwordConfirmation', 'must match confirmation.');
//     }
//   }
  
//   if (this.isNew && !this._password) {
//     this.invalidate('password', 'required');
//   }
// }, null);

userSchema.plugin(uniqueValidator); //email unique

module.exports = mongoose.model('User', userSchema);