const jwt = require('jsonwebtoken')

const config = require('../config')[process.env.NODE_ENV]

module.exports = user => {
  const payload = { id: user.id }
  const cnfg = { expiresIn: config.JWTAndCookiesMaxAge / 1000 }
  return jwt.sign(payload, config.JWTSecretKey, cnfg)
}
