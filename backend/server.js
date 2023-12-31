const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')

const postsRoutes=require('./routes/posts.js');


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => console.log('Listening to ${process.env.PORT}...'));
}).catch((error) => console.log(error));



app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next(); 
});

app.use('/posts', postsRoutes);








