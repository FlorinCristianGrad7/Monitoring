const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Adaugă această linie

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Adaugă această rută pentru a gestiona accesul la index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Celelalte rute și logica serverului rămân neschimbate

io.on('connection', (socket) => {
  // Restul codului serverului
});

const serverIP = "192.168.1.100";
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});

