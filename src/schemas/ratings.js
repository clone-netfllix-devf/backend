var mongoose = require('mongoose');
var Schema = mongoose.default.Schema;

var RatingSchema = new Schema({
  'name': {
    type : String,
    require: true
  },
  'description' : {
    type : String,
    require: true
  },
  'edad' : {
    type : Number,
    require: true
  },
},{'collection': 'rating', timestamps: true});
exports.default = moongose.default.model('rating',RatingSchema);