// require('./config/bootstrap')

const http = require('http');
const app = require('./app');

const server = http.Server(app);

server.listen(process.env.PORT || 3333, () => {
  console.log('server run in localhost:' + (process.env.PORT || 3333));
});
