const http = require("http");

const PORT = 8080;

const requestHandler = (request, response) => {
  if (request.url.indexOf("/home") >= 0) {
    response.writeHead(200, { "Content-Type": "text/json" });
    return response.end('{"url": "home"}');
  }
  response.writeHead(200, { "Content-Type": "text/json" });
  return response.end('{"url": "other"}');
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${PORT}`);
});
