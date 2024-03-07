const Post = require('../models/post');
// const User = require('../models/

const createPost = async (req, res) => {
    const post = new Post({
        title,
        author,
        description,
        likes,
        comments,
    });
    try {
        await post.save();
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};