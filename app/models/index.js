var fs = require('fs')
var path = require('path')
var { Sequelize, DataTypes } = require('sequelize')
var basename = path.basename(module.filename)

var config = {}
if (process.env.NODE_ENV === 'development') {
  var dbconfig = require('../../dbconfig.json')
  config = dbconfig.development
} else {
  config = process.env
}

console.log('Connecting with details', config)
const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'sqlite',
  storage: config.dbpath
})

const db = {}
fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    var model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db