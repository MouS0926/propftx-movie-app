
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    image: String,
    director:  String,
    genre:  String,
    
    year: Number,
        
    createdBy: String,
    username:String,
    reviews:[],
    rating:Number
    
},{
    versionKey:false
});


const movieModel = mongoose.model('movie', movieSchema);


module.exports = movieModel;
