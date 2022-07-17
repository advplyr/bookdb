const express = require('express')
const SearchManager = require('../managers/SearchManager')

class ApiRouter {
  constructor() {
    this.router = express()

    this.searchManager = new SearchManager()

    this.init()
  }

  init() {
    this.router.get('/', (req, res) => {
      res.send('Api')
    })

    this.router.get('/:provider/search', async (req, res) => {
      const response = await this.searchManager.searchBook(req.params.provider, req.query)
      res.json(response)
    })
  }
}
module.exports = ApiRouter