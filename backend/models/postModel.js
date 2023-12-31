const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema ({
    header :{
        type : String,
        required : true,
    },
    content :{
        type : String,
        required : true,
    },
    likes :{
        type : Number,
        required : true,
    },
},{timestamps:true});


module.exports = mongoose.model("post",postSchema);