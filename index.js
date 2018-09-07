const ENV = process.env.NODE_ENV;
const express = require('express');
const server = require('./server.js');
const config = require('./config.js')[ENV];
// const handlebarsConfig = require('./handlebars-config.js');
// const hdb = require('express-handlebars').create(handlebarsConfig.handlebars);

const app = express();

let routes = require('./routes');

// App setup environment port
app.set('port', process.env.PORT);
//render angular instead ! <3
app.use(express.static(`${__dirname}/client/dist/`));

app.use('/', routes);

// require('./routes.js')(router);

// start the server in cluster
if (require.main === module) {
  server(app);
} else {
  module.exports = server(app);
}

module.exports = app;
