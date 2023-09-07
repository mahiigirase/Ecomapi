const route = require('express').Router()
const {getCategory,postCategory,putCategory,deleteCategory} = require('../Controller/categoryController')

route.get('/',getCategory)
route.post('/',postCategory)
route.put('/:id',putCategory)
route.delete('/:id',deleteCategory)

module.exports = route

