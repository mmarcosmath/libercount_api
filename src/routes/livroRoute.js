'use strict'
const express = require('express')
const router = express.Router()
const controller = require('../controllers/livroController.js')

router.get('/', controller.get)

router.get('/:lido', controller.getByLido)

router.get('/livro/:id', controller.getById)

router.get('/codigo/:code', controller.getByCode)

router.put('/codigo/:id', controller.putByCode)

router.post('/', controller.post)

router.delete('/:id', controller.delete)

module.exports = router
