const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Hello World!")
})

app.get('/test', (req, res) => {
    res.status(200).send("Hello World!")
})


module.exports = app
