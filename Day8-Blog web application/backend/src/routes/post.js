// Import the Express
const express = require('express');
const router = express.Router();
const createPost = require('../controllers/post');

//Create Router 
router.post('/', createPost);




module.exports = router;