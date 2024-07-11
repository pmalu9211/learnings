import { WebSocketServer, WebSocket } from "ws";
import * as http from "http";

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket server is running");
});

// Create a WebSocket server attached to the HTTP server
const wss = new WebSocketServer({ server });

// Event handler for new WebSocket connections
wss.on("connection", (ws: WebSocket) => {
  console.log("New connection established");

  // Handle errors on the WebSocket connection
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  // Handle incoming messages from clients
  ws.on("message", (data, isBinary: boolean) => {
    const message = isBinary ? data : data.toString();
    console.log("Received message:", message);

    // Broadcast the received message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  // Handle WebSocket connection closure
  ws.on("close", (code: number, reason: Buffer) => {
    console.log(`Connection closed: ${code} - ${reason.toString()}`);
  });

  // Send an initial message to the newly connected client
  ws.send("Hello! Message from server!");
});

// Start the HTTP server on port 8080
server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
