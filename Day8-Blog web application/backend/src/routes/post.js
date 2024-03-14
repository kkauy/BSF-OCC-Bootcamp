// Import the Express
const express = require('express');
const router = express.Router();
const {
    createPost,
    getAllPost,
    getPost
} = require('../controllers/post');

//Create Routers 
router.post('/', createPost);
router.get('/', getAllPost);
router.post('/:id', getPost);

module.exports = router;