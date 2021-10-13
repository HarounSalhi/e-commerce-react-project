const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
    price:{type:String,required:true},
    categorie:{type:String,required:true},
    color:{type:String,required:false},
    size:{type:String,required:false},
})

module.exports = mongoose.Schema('product',productSchema);