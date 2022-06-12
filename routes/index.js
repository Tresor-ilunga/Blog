var express = require('express');
const Article = require('../models/article.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Récupération des articles
  Article.find()
  .then((articles)=>{
    res.render('index', { title: 'Express', 'articles': articles});
    //res.status(200).json(articles);
  })
  .catch((err)=>{
    res.status(200).json(err);
  })
});

router.get('/article/:id', (req, res)=>{
  //console.log(req.params.id);
  Article.findOne({_id: req.params.id})
  .then((article)=>{
    res.render('single-article', {article: article})
    //console.log(article);
  })
  .catch((err)=>{
    res.redirect('/');
    console.log(err);
  });
})

module.exports = router;
