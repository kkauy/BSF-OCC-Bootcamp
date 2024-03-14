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
        res.status(400).json({error: error.message});
    }
}

//Get all the post / R of CRUD
const getAllPost = async(req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            count: posts.length,
            posts,
        });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Get a single post 
const getPost = async (req,res) => { 
    const {id} = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({message: 'Post not found'});
        res.status(200).json(post);    
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Update a post  U of CRUD
const updatePost = async (req,res) => {
    const {id} = req.params;
    try {
        const post = await Post.findOneAndUpdate(
            {_id: id}, // _id is to expected to matched
            {...req.body},
            {new: true, runValidators: true}
        );
        if(!post) {
            return res.status(404).json({
                error: 'Not matching post found'
            });
        };
        res.status(200).json({
            message: "The post has been successfully updated",
            post
        })        
    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
}

module.exports = { 
    createPost, 
    getAllPost,
    getPost,
    updatePost
};

