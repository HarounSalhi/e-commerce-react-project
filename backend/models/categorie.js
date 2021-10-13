const mongoose=require('mongoose');

const categorieSchema = mongose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:false},
    imageUrl:{type:String,required:false},
});

module.exports = mongoose.model('categorie', categorieSchema);