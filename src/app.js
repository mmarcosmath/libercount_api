'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//Connecta ao banco
mongoose.connect('mongodb+srv://marcos:senha@libercluster-sdizp.azure.mongodb.net/test?retryWrites=true&w=majority')

//Carrega Models
const Exemplar = require('./models/livro.js');

//Carregar Rotas
const indexRoute = require('./routes/indexRoute.js')
const livroRoute = require('./routes/livroRoute.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', indexRoute)
app.use('/livros', livroRoute)

module.exports = app