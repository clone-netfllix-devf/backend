var _mongoose = require('mongoose');


var Schema = _mongoose.default.Schema;

var BookSchema = new Schema({

    'image': {
        type: String,
        require: true
    },
    'name': {
        type: String,
        require: true
    },
    'synopsis': {
        type: String,
        require: true
    },
    'director': {
        type: String,
        require: true
    },
    'year': {
        type: Number,
        require: true
    },
    'rank': {
        type: Number,
        require: true
    },
    'duration': {
        type: Decimal128,
        require: true
    },
    'clasification': {
        type: Schema.Types.ObjectId,
        ref: 'clasification'
    },
    'genre': {
        type: Schema.Types.ObjectId,
        ref: 'genre'
    },
    'language': {
        type: String,
        require: true
    },
    'premium': {
        type: Boolean,
        require: true
    },
    'url': {
        type: String,
        require: true
    }
}, { 'collection': 'movie', timestamps: true });

exports.default = _mongoose.default.model('movie', BookSchema);