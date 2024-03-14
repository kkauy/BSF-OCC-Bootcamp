//Import necesssary modules or depedency
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//Make an instance of Express App
const app = express();

//Middleware
app.use(express.json());
app.use((req,res,next) => {
   console.log(req.path, req.method);
   if (req.body) {
      console.log('Request body :');
      console.log(req.body);
   }
   next();
}); 


//Routes
app.use('/api/posts', require('./src/routes/post'));

//Connect to MongoDB or database
mongoose
     .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(()=> {
        console.log('Connected to MongoDB')
     }).catch((err) => {
        console.log('Error in connecting to MongoDB or Database:', err.message);
     });

     //start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });


