const crypto = require('crypto')

const { sequelize, Sequelize: DataTypes } = require('../config/db')

class User extends DataTypes.Model {
  checkPassword (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 128, 'sha1')
      .toString('base64') === this.passwordHash
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 20],
      isAlphanumeric: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 60],
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^((\+7|7|8)([0-9]){10})$/
    }
  },
  budget: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 1000000
    }
  },
  passwordHash: DataTypes.STRING,
  salt: DataTypes.STRING,
  password: {
    type: DataTypes.VIRTUAL,
    allowNull: false,
    set (password) {
      if (password && typeof password === 'string') {
        this.setDataValue('password', password)
        this.setDataValue('salt', crypto.randomBytes(128).toString('base64'))
        this.setDataValue(
          'passwordHash',
          crypto.pbkdf2Sync(password, this.salt, 10000, 128, 'sha1').toString('base64')
        )
      } else {
        const error = new Error()
        error.name = 'SequelizeValidationError'
        error.errors = [{
          message: 'Validation typeof String on password failed',
          path: 'password'
        }]
        throw error
      }
    },
    validate: {
      len: [8, 100]
    }
  }
}, {
  sequelize,
  modelName: 'user'
})

module.exports = User
