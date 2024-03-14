//post.js

//Import Mongoose
const mongoose = require('mongoose');

//Create Schema for the Post model
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    comments: [{
        body: {
            type: String,
            required: true
        }
    }],
});


const Post = mongoose.model('Post', postSchema);

//Export the Post Model
module.exports=Post;
