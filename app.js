const express = require("express");
const mongoose = require('mongoose'); 

const ejs = require("ejs");
const Post = require('./models/Post');

const app = express();

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
app.get('/', async(req, res) => {
  const posts = await Post.find({})
  res.render('index',{
    posts
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/addPost", (req, res) => {
  res.render("add_post");
});

app.post('/posts', async(req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});
