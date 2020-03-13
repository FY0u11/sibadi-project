module.exports = {
  development: {
    apiPrefix: '/api/v1',
    username: 'postgres',
    password: 'lineate4@Sun',
    database: 'lntsunday',
    host: 'db',
    dialect: 'postgres',
    JWTSecretKey: 'JWT-random-dev-key',
    JWTAndCookiesMaxAge: 60 * 60 * 1000 // in milliseconds
  },
  test: {
    apiPrefix: '/api/v1',
    username: 'postgres_test',
    password: 'test_password',
    database: 'lntsunday_test',
    host: 'db',
    dialect: 'postgres',
    JWTSecretKey: 'JWT-random-test-key',
    JWTAndCookiesMaxAge: 60 * 60 * 1000
  },
  production: {
    apiPrefix: '/api/v1',
    username: 'postgres_prod',
    password: 'prod_password',
    database: 'lntsunday',
    host: 'db',
    dialect: 'postgres',
    JWTSecretKey: 'JWT-random-prod-key',
    JWTAndCookiesMaxAge: 60 * 60 * 1000
  }
}
