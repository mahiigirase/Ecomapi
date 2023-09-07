const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    saleAt:{
        type:Date,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
})

module.exports = mongoose.model('product',productSchema)