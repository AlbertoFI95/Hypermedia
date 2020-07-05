'use strict';

var fs = require('fs');
var express = require('express')
var app = express()
var path = require('path')
var serveStatic = require('serve-static')
var http = require('http');
var bodyParser = require('body-parser');

let { setupDataLayer } = require("./service/DataLayer");
let { setupDataLayerS } = require("./service/DataLayerS");
let { setupDataLayerE } = require("./service/DataLayerE");
let { setupDataLayerA } = require("./service/DataLayerA");
let { setupDataLayerP } = require("./service/DataLayerP");
let { setupDataLayerPR } = require("./service/DataLayerPR");
let { setupDataLayerI } = require("./service/DataLayerI");
var serverPort = process.env.PORT || 8080;

var Volunteer = require('./controllers/Volunteer');

// swaggerRouter configuration
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};
// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());


  app.use(serveStatic(path.join(__dirname, 'AUSER'), {
    maxAge: '1d',
    setHeaders: setCustomCacheControl
  }))

  app.get('/', function (req, res, next) {
    var Home = fs.readFileSync(path.join(__dirname, './AUSER/Home.html'), 'utf8');
    res.writeHead(200);
    res.write(Home);
    res.end();
  })

})

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/v1/volunteers/Become', (req, res, next) => {
  Volunteer.volunteersRegisterPOST(req, res, next);
})

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

// Start the server
setupDataLayer().then(() => {
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
	 setupDataLayerE();
	 setupDataLayerA();
	 setupDataLayerP();
	 setupDataLayerS();
	 setupDataLayerPR();
	 setupDataLayerI();
});
