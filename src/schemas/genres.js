import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  'name':{
      type : String,
      require : true
  },
  'description': {
        type : String,
        require: true
  }
},{'collection': 'genre', timestamps: true});


export default mongoose.model('genre',GenreSchema);