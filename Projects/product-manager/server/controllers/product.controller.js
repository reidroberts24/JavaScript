const Product = require('../models/product.model')

module.exports.createProduct = (req, res) => {
    productInfo = req.body
    Product.create(productInfo)
        .then( product => res.json(product))
        .catch( err => res.json(err))
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then( allProducts => res.json(allProducts) )
        .catch( err => res.json(err) )
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id} ) // "_id" is for mongoose. But in req.params.id we can name it whatever we want after params....it just needs to match our route
        .then( product => res.json(product) )
        .catch( err => res.json(err) )
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then( updatedProduct => res.json(updatedProduct) )
        .catch( err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}