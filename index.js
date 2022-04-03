const _Port = 8080

const server = require('./server/index')
const express = require('express')
const app = express()

app.use('/', server)
app.listen(_Port)