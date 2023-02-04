
let http = require('http');
let url = require('url');
let Logger = require('./logger');
let logger = new Logger('Server');

// A function to wrap our server functionality so that we can export it
let start = function(route, handle){

   function onRequest(request, response){
       // Extracting the pathname from the url requested
       let pathname = url.parse(request.url).pathname
       console.log("Request for " + pathname + " has been received.")
      
       // pass handle object to the route function 
       // Inject the response object into the route function
       route(handle, pathname, response);


       //response.writeHead(200, {"Content-type": "text/plain"});
       //response.write("Hello World");
       //response.end();
   }
  
   let PORT = process.env.PORT || 8000;

   http.createServer(onRequest).listen(PORT);
   logger.info(`Server has started on Port: ${PORT}`)
   console.log(`Server has started on Port: ${PORT}`);
}

exports.start = start;

