const Article = require('../models/article.model');
const Category = require('../models/category.model');

exports.list = (req, res) => {
    // Récupération des articles
    Article.find()
        .then((articles) => {
            res.render('index', { title: 'Express', 'articles': articles });
            //res.status(200).json(articles);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
}

exports.show = (req, res) => {
    //console.log(req.params.id);
    Article.findOne({ _id: req.params.id })
        .then((article) => {
            res.render('single-article', { article: article })
                //console.log(article);
        })
        .catch((err) => {
            res.redirect('/');
            console.log(err);
        });
}

exports.add = (req, res) => {
    Category.find()
        .then((categories) => {
            res.render('add-article', { categories: categories });
        })
        .catch(() => {
            res.redirect('/');
        })
}