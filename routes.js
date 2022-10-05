const express = require('express')
const app = express()

app.get('/test', (req, res) => {
    res.status(200).send("Not Hello World!")
})

module.exports = app