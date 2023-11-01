const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts)
    app.post('/api/products', ProductController.createProduct)
}