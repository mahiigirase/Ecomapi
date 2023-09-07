const { json } = require('body-parser');
const Product = require('../Model/Product');

exports.getProduct = async (req,res)=>{
    try {
        const product = await Product.find().populate('category');
        return res.json({errors:false,data:product})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}

exports.postProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        return res.json({errors:false,data:product})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}

exports.putProduct = async (req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body , {new:true});
        return res.json({errors:false,data:product})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}

exports.deleteProduct = async (req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data:product})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}