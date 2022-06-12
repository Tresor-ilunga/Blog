var express = require('express');
const articleController = require('../controllers/article.controller');
var router = express.Router();

/* GET home page. */
router.get('/', articleController.list);

router.get('/article/:id', articleController.show);

router.get('/add-article', articleController.add);

router.post('/add-article', articleController.addOne);

module.exports = router;