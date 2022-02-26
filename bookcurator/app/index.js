const db = require('./models')

console.log('Starting environment', process.env.NODE_ENV)
db.sequelize.sync({ force: false }).then(() => {
  console.log('DB connection success and synced')
  // TODO: Start express server
}).catch((error) => {
  console.error('Failed to connect to DB', error)
})