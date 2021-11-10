const router = require('express').Router();
const User = require('../models/User');
const Article = require('../models/Article')


// create new article

router.post('/', async (req, res) => {
    const newArticle = new Article(req.body)
    try {
        const savedArticle = await newArticle.save()
        res.status(200).json(savedArticle)
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Update article
router.put('/:id', async (req, res) => {

    try {
        const article = await Article.findById(req.params.id);
        if (article.username === req.body.username) {
            try {
                const updatedArticle = await Article.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updatedArticle)
            }
            catch (err){
                res.status(500).json(err)
            }
        } else {
            res.status(401).json('You are not allowed to update this article')
        }
        

    }
    catch (err) {
        res.status(500).json(err)
    }
})


// delete article
router.delete('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (article.username === req.body.username) {
            try {
                await article.delete()
                res.status(200).json('Article deleted')                
            }
            catch (err){
                res.status(500).json(err)
            }
        } else {
            res.status(401).json('You dont have permission to delete this article')
        }
        

    }
    catch (err) {
        res.status(500).json(err)
    }
})



// get article
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)
        res.status(200).json(article)
    }
    catch {
        res.status(500).json(err)
    }
})
// get all articles

router.get('/', async (req, res) => {
    const username = req.query.user;
    const categoryName = req.query.cat;
        try {
            let articles; 
            if (username) {
                articles = await Article.find({username})
            } else if (categoryName) {
                posts = await Article.find({
                    categories: {
                    $in: [categoryName],
                }})
            } else {
                articles = await Article.find()
            }
            res.status(200).json(articles)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router