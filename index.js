//let server = require('./server');
//server.start()

let server = require('./server');
let router = require('./router');
let requestHandlers = require("./requestHandlers");

//All we are doing here is mapping different URLs to the respective functions in our request handler module as key-value pairs.
//After defining our object, we pass it to the server as an additional parameter. 

let handle = {};
handle["/"] = requestHandlers.index;
handle["/index.html"] = requestHandlers.index;
handle["/portfolio.html"] = requestHandlers.portfolio;

server.start(router.route, handle);