const express = require('express')
const http = require('http')
const Path = require('path')

class Server {
  constructor(HOST, PORT) {
    this.Host = HOST
    this.Port = PORT
    this.server = null
  }

  start() {
    const app = express()
    this.server = http.createServer(app)

    app.get('/', (req, res) => {
      res.send('Hello World')
    })

    this.server.listen(this.Port, this.Host, () => {
      console.log(`Server listening at ${this.Host}:${this.Port}`)
    })
  }
}
module.exports = Server