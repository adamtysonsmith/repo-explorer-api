const cache = require('apicache').middleware
const Controllers = require('./controllers')

module.exports = (app) => {
  app.get('/repositories', cache('5 minutes'), Controllers.repoQuery)
}
