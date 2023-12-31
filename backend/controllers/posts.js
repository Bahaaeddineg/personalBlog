const postModel = require("../models/postModel.js");
const mongoose = require("mongoose");
////// the implementation of the post request method //////
const createPost = async (req,res) => {
    const { header, content, likes } = req.body; // data model
    try {
        const post = await postModel.create({ header, content, likes });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/////// the implementation of the get request method ///////

const getAllPosts = async (req,res)=> {
    try{
        const posts = await postModel.find({}).sort({createdAt:-1});
        res.status(200).json(posts);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}


const getPostById = async (req,res)=> {
    const {id}= req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such id in your db there is no point to send the request"});
    }

    try{
        const post = await postModel.findById(id);
        res.status(200).json(post);
    }catch(error){
        res.status(400).json({ message: "No such post" });
    }
}
const deletePost = async (req,res)=> {
    const {id}= req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such id in your db there is no point to send the request to delete"});
    }

    try{
        const post = await postModel.findOneAndDelete({_id:id});
        res.status(200).json({message:"Deleted Successfully"});
    }catch(error){
        res.status(400).json({ message: "No such post to delete" });
    }
}
const updatePost = async (req,res)=> {
    const {id}= req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such id in your db there is no point to send the request to update"});
    }

    try{
        const post = await postModel.findOneAndUpdate({_id:id},{...req.body});
        res.status(200).json(post);
    }catch(error){
        res.status(400).json({ message: "No such post to update" });
    }
}
module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    deletePost,
    updatePost
}