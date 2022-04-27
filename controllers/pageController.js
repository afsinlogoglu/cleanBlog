const Post = require('../models/Post')

exports.getAboutPage = (req, res) => {
    res.render('about');
  };

  exports.getAddPage = (req, res) => {
    res.render('addPhoto');
  };

  exports.getEditPage = async (req, res) => {
    const post = await Post.findById({ _id: req.params.id });
    res.render('editPost', {
      post,
    });
  };