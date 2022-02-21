const express = require('express');
const morgan = require('morgan');
const actuator = require('express-actuator');

// Import the endpoint routes
// const myServiceRoute = require(./routes/service_router)
const eventsRouter = require('./routes/events_router');

const app = express();

// Middlewares
const actuatorConfig = {
  basePath: '',
  infoGitMode: 'simple',
  infoBuildOptions: null,
  infoDateFormat: null,
  customEndpoints: [],
};

app.use(express.json());
app.use(actuator(actuatorConfig));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// Endpoints
// Create the endpoint for the service app.use('/api/myService', RouteFile.js)
app.use('/api/githubapp', eventsRouter);

module.exports = app;
