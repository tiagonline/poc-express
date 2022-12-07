const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send({ name: 'Tiago Oliveira' });
})

router.post('/user/create', (req, res) => {
    console.log('user', req.body);
    res.status(201).send(req.body);
})

module.exports = { router }