//Import Post Schema
const Post = require('../models/post');

//Create a Create Post Controller
const createPost = async (req,res) => {
    //Destructring the body of req
    const {title, author, description, likes, comments} = req.body;

    try{
        const post = await Post.create({
            title,
            author,
            description,
            likes,
            comments,
        });
        res.status(200).json(post);

    } catch (error) {
        res.status(400).json({erro: error.message});
    }
}

module.exports = createPost;

