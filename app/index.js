
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
console.log('Starting environment', process.env.NODE_ENV)

const Server = require('./server/Server')
const db = require('./models')

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333
const server = new Server(HOST, PORT)

db.sequelize.sync({ force: false }).then(() => {
  console.log('DB connection success and synced')

  server.start()
}).catch((error) => {
  console.error('Failed to connect to DB', error)
})