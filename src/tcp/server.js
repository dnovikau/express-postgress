const net = require("net");
const server = net.createServer();

server.listen({ port: 9000, host: "localhost" }, () => {
  console.log("Server listening on 127.0.0.1:9000");
});

server.on("connection", (socket) => {
  console.log("connection esteblised");
  socket.write("Hello from socket\n");
  setTimeout(() => {
    socket.end("Good buy from socket!\n");
  }, 3000);
});

server.on("data", (data) => {
  console.log("data transfered: " + data.toString());
});

server.on("end", (socket) => {
  console.log("connection closed");
});
