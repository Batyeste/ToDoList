const productRoute = require('express').Router(),
    productController = require('../../controllers/todo');
const {checkIsAUth} = require("../../config/jwtConfig");

module.exports = (app) => {
    productRoute.get('/todo', productController.getAll)
    productRoute.post('/todo', productController.create)
    productRoute.put('/todo/:uuid', productController.update)
    productRoute.delete('/todo/:uuid', productController.delete)
    productRoute.get('/todo/:uuid', productController.getById)
    app.use('/api/v1', productRoute)
}