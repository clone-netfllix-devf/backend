import  mongoose  from 'mongoose';

const Schema =   mongoose.Schema({
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
  }

},{'collection': 'rating', timestamps: true});
export default mongoose.model('rating',Schema);