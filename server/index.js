const express = require('express')
const server = express.Router()

server.route('/').get((req, res)=>{
    res.sendFile(__dirname + '/models/index.html')
})

module.exports = server