// Import the Express
const express = require('express');
const router = express.Router();
const {
    createPost,
    getAllPost,
    getPost,
    updatePost
} = require('../controllers/post');

//Create Routers 
router.post('/', createPost);
router.get('/', getAllPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);

module.exports = router;