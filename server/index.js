// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = require('./middlewares');
// jsonServer.defaults();
const { DEFAULT_SERVER_PORT } = require('./config');

server.use(middlewares);
server.use(router);
server.listen(DEFAULT_SERVER_PORT, () => {
  console.log('JSON Server is running');
});
