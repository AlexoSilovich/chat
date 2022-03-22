const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  }
})

const rooms = new Map()

app.get('/rooms', (reqest, respose) => {
  respose.json(rooms)
})

io.on('connection', socket => {
  console.log('socket connected', socket)
})

server.listen(9999, (error) => {
  if (error) {
    throw Error(error)
  }
  console.log('server start!')
})























