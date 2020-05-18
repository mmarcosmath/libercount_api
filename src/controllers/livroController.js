'use strict'
const mongoose = require('mongoose');
const Exemplar = mongoose.model('exemplar');

exports.post = (req, res, next) => {
    var exemplar = new Exemplar(req.body)
    exemplar.save()
        .then(x => { res.status(201).send({ mensagem: "Livro cadastrado" }) })
        .catch(e => { res.status(400).send({ mensagem: "Falha", erro: e }) });

}

exports.get = (req, res, next) => {
    Exemplar.find({}, "_id codigo titulo lido")
        .then(data => { res.status(200).send(data) })
        .catch(e => { res.status(400).send({ mensagem: "Falha", erro: e }) });

}

exports.getByLido = (req, res, next) => {
    Exemplar.find({ lido: req.params.lido }, "_id codigo titulo lido")
        .then(data => { res.status(200).send(data) })
        .catch(e => { res.status(400).send({ mensagem: "Falha", erro: e }) });

}


exports.getById = (req, res, next) => {
    Exemplar.findById(req.params.id)
        .then(data => { res.status(200).send(data) })
        .catch(e => { res.status(400).send({ mensagem: "Falha", erro: e }) });

}

exports.getByCode = (req, res, next) => {
    Exemplar.findOne({ codigo: req.params.code })
        .then(data => { res.status(200).send(data) })
        .catch(e => { res.status(400).send({ mensagem: "Falha", erro: e }) });

}

exports.putByCode = (req, res, next) => {
    Exemplar.updateOne({lido: true }).where({_id : req.params.id})
        .then(data => { res.status(200).send(data) })
        .catch(e => { res.status(400).send({ mensagem: "Falha", erro: e }) });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id, item: req.body })
}