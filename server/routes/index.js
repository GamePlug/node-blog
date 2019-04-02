const routes = [
  require('./user').routes(),
  require('./blog').routes(),
]

module.exports = routes;
