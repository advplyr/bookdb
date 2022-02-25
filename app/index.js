const db = require('./models')

db.sequelize.sync({ force: true }).then(() => {
  console.log('DB connection success and synced')
  // TODO: Start express server
}).catch((error) => {
  console.error('Failed to connect to DB', error)
})