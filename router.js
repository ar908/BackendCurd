const express = require('express')
const { postArticle, getArticles, getArticlesById, updateArticle, deleteArticle, getByCatagory, getByAuthor } = require('./controller')

const router = express.Router()

router.use(express.json())

router.post('/articles', postArticle)
router.get('/articles', getArticles)
router.get('/articles/:id', getArticlesById)
router.put('/articles/:id', updateArticle)
router.delete('/articles/:id', deleteArticle)

router.get('/articles/category/:category', getByCatagory)
router.get('/articles/author/:author', getByAuthor)

module.exports = router