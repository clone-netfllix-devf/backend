import  mongoose  from 'mongoose';

const Schema = mongoose.Schema;

var RatingSchema = new Schema({
  'name': {
    type : String,
    require: true
  },
  'description' : {
    type : String,
    require: true
  },
  'age' : {
    type : Number,
    require: true
  },
},{'collection': 'rating', timestamps: true});
export default mongoose.model('rating',RatingSchema);