const Sequelize = require('sequelize')
const config = require('..')[process.env.NODE_ENV]
const logger = require('pino')()
logger.level = process.env.NODE_ENV === 'development' ? 'debug' : 'info'

const { dialect, host, database, username, password } = config

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  define: {
    timestamps: false
  },
  logging: msg => logger.debug(msg)
})

module.exports = { Sequelize, sequelize }
