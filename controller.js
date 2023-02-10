const articals = require('./model')

exports.postArticle  = async (req, res) => {
    try {
        const result = await articals.create(req.body)
        res.status(200).json({ result })
    } catch (e) {
        res.status(400).send(e.message)
    }
}

exports.getArticles = async (req, res) => {
    try {
        const result =  await articals.find()
        res.status(200).json({ result })
    } catch (e) {
        res.status(400).send(e.message)
    }
}

exports.getArticlesById = async (req, res) => {
    const _id = req.params.id
    try {
        const result = await articals.find({ _id })
        res.status(200).json({ result })
    } catch (e) {
        res.status(400).send(e.message)
    }
}

exports.updateArticle = async (req, res) => {
    const _id = req.params.id

    try {
        const result = await articals.updateOne({ _id }, {$set: { ...req.body}})
        res.status(200).json({ result })
    } catch (e) {
        res.status(400).send(e.message)
    }
}

exports.deleteArticle = async (req, res) => {
    const _id = req.params.id
    try {
        const result = await articals.deleteOne({ _id })
        res.status(200).json({ result })
    } catch (e) {
        res.status(400).send(e.message)
    }
}

exports.getByCatagory = async (req, res) => {
    const catagory = req.params.catagory
    try {
        const result = await articals.find({ catagory })
        res.status(200).json({ result })
    } catch (e) {
        res.status(400).send(e.message)
    }
}

exports.getByAuthor = async (req, res) => {
    const author = req.params.author
    try {
        const result = await articals.find({ author })
        res.status(200).json({ result })
    } catch (e) {
        res.status(400).send(e.message)
    }
}