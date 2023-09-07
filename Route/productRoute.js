const route = require('express').Router()
const {getProduct,postProduct,putProduct,deleteProduct} = require('../Controller/productController')

route.get('/',getProduct)
route.post('/',postProduct)
route.put('/:id',putProduct)
route.delete('/:id',deleteProduct)

module.exports = route

