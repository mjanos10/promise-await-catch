'use strict'

const express = require('express')
const db = require('./db')

const userModel = require('./models/user-model')
const app = express()

db.connect()

app.get('/users/:id', (req, res) => {
  return userModel
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: 'An error occured' }))
})

app.listen(3000, () => console.log('Server is listening'))
