const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts)
    app.get('/api/products/:id', ProductController.getOneProduct) //the ":id" needs to match the parameter name in req.params.id <- id matched
    app.post('/api/products', ProductController.createProduct)
}