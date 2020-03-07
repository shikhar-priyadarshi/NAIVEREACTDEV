const mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var UserSchema = new Schema({
    email:  {
        type : String,
        required : true
    },
    password: String,
    contact:   String,
    createdAt: { type: Date, default: Date.now },
  });
  var User = mongoose.model('User', UserSchema);
  module.exports = User;