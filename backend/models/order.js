const mongoose=require('mongoose');

const orderSchema = mongoose.Schema({
    userId:{type:String,required:false},
    products:{type:Array,required:true},
    price:{type:Number,required:true},
    date:{type:Date,required:true},
});

module.exports=mongoose.Schema('order',orderSchema);