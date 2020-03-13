const passport = require('koa-passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('../../config')[process.env.NODE_ENV]
const User = require('../../models/User')
const Role = require('../../models/Role')
const UserRole = require('../../models/UserRole')

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    User.belongsToMany(Role, { through: UserRole });
    Role.belongsToMany(User, { through: UserRole });
    const rawUser = await User.findOne({ where: { username }, include: Role })
    if (!rawUser || !rawUser.checkPassword(password)) {
      done(false, false, { message: 'Incorrect username or password' })
    } else {
      const user = rawUser.toJSON()
      delete user.password
      delete user.salt
      delete user.passwordHash
      const roles = []
      for (role of user.roles) {
        roles.push(role.name)
      }
      user.roles = roles
      done(false, user)
    }
  } catch (error) {
    done(error)
  }
}))

const opts = {
  jwtFromRequest: ctx => {
    return ctx.headers.authorization
      ? ExtractJwt.fromAuthHeaderAsBearerToken()(ctx)
      : ctx.cookies.get('jwt')
  },
  secretOrKey: config.JWTSecretKey
}

passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
  try {
    User.belongsToMany(Role, { through: UserRole });
    Role.belongsToMany(User, { through: UserRole });
    const user = await User.findByPk(jwtPayload.id, { attributes: ['id'], include: Role })
    if (!user) {
      done(false, false, { message: 'This token belongs to deleted user' })
    } else {
      const roles = []
      for (role of user.roles) {
        roles.push(role.name)
      }
      user.roles = roles
      done(false, user)
    }
  } catch (error) {
    done(error)
  }
}))

module.exports = passport
