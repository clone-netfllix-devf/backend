var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  'name':{
      type : String,
      require : true
  },
  'description': {
        type : String,
        require: true
  }
},{'collection': 'genre', timestamps: true});
exports.default = moongose.default.model('genre',GenreSchema);