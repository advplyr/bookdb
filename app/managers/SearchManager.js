const Audible = require('../providers/Audible')
const Audnexus = require('../providers/Audnexus')
const GoogleBooks = require('../providers/GoogleBooks')
const iTunes = require('../providers/iTunes')
const OpenLibrary = require('../providers/OpenLibrary')
const Logger = require('../Logger')

class SearchManager {
  constructor() {
    this.audible = new Audible()
    this.audnexus = new Audnexus()
    this.googleBooks = new GoogleBooks()
    this.iTunes = new iTunes()
    this.openLibrary = new OpenLibrary()
  }

  async searchBook(provider, options) {
    console.log('Search Book', provider, options)

    if (provider === 'audible') {
      if (!options.title && !options.asin) {
        return {
          error: 'Audible must provide a search title or ASIN'
        }
      }

      const results = await this.audible.search(options.title, options.author, options.asin)
      return {
        data: results
      }
    } else if (provider === 'google') {
      if (!options.title) {
        return {
          error: 'Google Books must provide a search title'
        }
      }

      const results = await this.googleBooks.search(options.title, options.author)
      return {
        data: results
      }
    } else if (provider === 'itunes') {
      if (!options.term && !options.title) {
        return {
          error: 'iTunes must provide a search term or title'
        }
      }

      const results = await this.iTunes.searchAudiobooks(options.term || options.title)
      return {
        data: results
      }
    } else if (provider === 'openlibrary') {
      if (!options.title) {
        return {
          error: 'Open Library must provide a search title'
        }
      }

      const results = await this.openLibrary.searchTitle(options.title)
      return {
        data: results
      }
    } else {
      Logger.error('[SearchManager] Invalid provider ' + provider)
      return {
        error: 'Invalid provider'
      }
    }
  }
}
module.exports = SearchManager