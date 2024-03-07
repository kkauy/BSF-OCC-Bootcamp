const express = require('express');
const mongoose = require('mongoose');
require('./backend/node_modules/dotenv/lib/main').config();


//Make an instance of Express App
const app = express();

//middleware
app.use(express.json());

// Routes
app.use('/api/posts/', require('./src/routes/post'));

//Connect to MongDB or Database
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
         useUnifiedTopology: true,
    }).then (() =>{
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('error in connecting to MongoDB', error.message);
    })

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

