const http = require('http');
const url = require('url');

http.createServer((req,res ) => {
   var queryObj - url.parse(req.url, true).query;
   var userId = queryObject.userId;

   if (userId) {
     res.writeHead(400, {'Content-Type': 'application/json');

     res.end(JSON.stringify({error: 'rbx id param is missing'}));
   }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})
