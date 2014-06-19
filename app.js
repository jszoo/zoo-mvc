var webServer = require('./lib/webServer');

var DEFAULT_PORT = 1337;
var argv_port = process.env.PORT;

webServer.create(argv_port || DEFAULT_PORT);