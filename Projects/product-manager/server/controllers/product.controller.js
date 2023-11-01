const Product = require('../models/product.model')

module.exports.createProduct = (req, res) => {
    productInfo = req.body
    Product.create(productInfo)
        .then( product => res.json(product))
        .catch( err => res.json(err))
}