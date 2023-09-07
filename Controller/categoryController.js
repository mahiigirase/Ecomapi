const { json } = require('body-parser');
const  Category = require('../Model/Category');

exports.getCategory = async (req,res)=>{
    try {
        const category= await Category.find();
        return res.json({errors:false,data:category})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}

exports.postCategory = async (req,res)=>{
    try {
        const category= await Category.create(req.body);
        return res.json({errors:false,data:category})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}

exports.putCategory = async (req,res)=>{
    try {
        const category= await Category.findByIdAndUpdate(req.params.id,req.body , {new:true});
        return res.json({errors:false,data:category})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}

exports.deleteCategory = async (req,res)=>{
    try {
        const category= await Category.findByIdAndDelete(req.params.id);
        return res.json({errors:false,data:category})
    } catch (error) {
        return res.status(400),json({errors:true,message:error.message})
    }
}