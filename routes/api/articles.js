const express = require("express");
const router = express.Router();

// Article Model
const Article = require("../../models/Article");

// @route GET api/articles
// @desc Get All Articles
// @access Public
router.get("/", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then((articles) => res.json(articles));
});

// @route POST api/articles
// @desc Create A ARticle
// @access Public
router.post("/", (req, res) => {
  const newArticle = new Article({
    name: req.body.name,
  });

  newArticle.save().then((article) => res.json(article));
});

// @route DELETE api/articles/:id
// @desc DELETE A ARticle
// @access Public
router.delete("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => article.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
