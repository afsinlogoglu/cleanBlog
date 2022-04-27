const express = require("express");
const mongoose = require('mongoose'); 

const ejs = require("ejs");
const Post = require('./models/Post');

const app = express();
//controllers

const postController = require('./controllers/postController')

const pageController = require('./controllers/pageController');


//db connection
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//template engine
app.set('view engine', 'ejs');


//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port:${port}`);
});


//routes
app.get('/', postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.get("/about", pageController.getAboutPage);
app.get("/addPost", pageController.getAddPage);
app.post('/posts', postController.createPost);
app.put('/post/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

