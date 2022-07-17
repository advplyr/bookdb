const express = require('express')
const http = require('http')
const Path = require('path')
const ApiRouter = require('./routers/ApiRouter')

class Server {
  constructor(HOST, PORT) {
    this.Host = HOST
    this.Port = PORT
    this.server = null

    this.apiRouter = new ApiRouter()
  }

  start() {
    const app = express()
    this.server = http.createServer(app)

    app.use('/api', this.apiRouter.router)

    app.get('/', (req, res) => {
      res.send('Hello World')
    })

    this.server.listen(this.Port, this.Host, () => {
      console.log(`Server listening at ${this.Host}:${this.Port}`)
    })
  }
}
module.exports = Server