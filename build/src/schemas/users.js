'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;

var Schema = _mongoose2.default.Schema;

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
    default: false,
    require: false

  },
  'address': {

    type: String,
    require: false

  },
  'ccHash': {

    type: String,

    require: true

  },
  'preferences': {

    type: [Schema.Types.ObjectId],

    ref: 'genre',
    require: false
  },
  'email': {

    type: String,

    require: true

  },
  'password': {

    type: String,

    require: true

  },
  'birthDate': {

    type: Date,

    require: false

  }
}, { 'collection': 'user', timestamps: true });

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    _bcrypt2.default.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

exports.default = _mongoose2.default.model('user', UserSchema);