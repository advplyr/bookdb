var fs = require('fs')
var path = require('path')
var { Sequelize, DataTypes } = require('sequelize')
var basename = path.basename(module.filename)
var dbconfig = require('../../dbconfig.json')
var db = {}

var sequelize
if (dbconfig.uri) {
  console.log(`Connecting with uri "${dbconfig.uri}"`)
  sequelize = new Sequelize(dbconfig.uri, dbconfig.options)
} else {
  console.log('Connecting with details', dbconfig)
  sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig.options)
}

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