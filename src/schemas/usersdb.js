var _mongoose = require('mongoose');

var Schema = _mongoose.default.Schema;

var UserSchema = new Schema({
  'name': {

        type: String,

        require: true

    },
  'lastName': {

        type: String,

        require: true

    },
  'isPremium': {

        type: Boolean,

        require: true

    },
  'address': {

        type: String,

        require: true

    },
  'ccHash': {

        type: String,

        require: true

    },
  'preferences': {

        type: String,

        require: false
    },
  'email': {

        type: String,

        require: true

    },
  'passwordEncoded': {

        type: String,

        require: true

    },
  'birthDate': {

        type: Date,

        require: true

    },
{ 'collection': 'user', timestamps: true });

exports.default = _mongoose.default.model('user', UserSchema);