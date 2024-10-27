// server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require('./src/db/connection');
const messageRoutes = require('./src/routes/messages');
const setupSocket = require('./src/sockets/socketHandler');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const server = http.createServer(app);

// Enable CORS
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

// Initialize Socket.IO server
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST'],
        credentials: true,
    },
    transports: ['websocket', 'polling'], // WebSocket with fallback
    pingInterval: 25000,  // Keep connection alive by pinging
    pingTimeout: 60000,
});

// Setup routes
app.use('/api/messages', messageRoutes);

// Setup socket event handlers
setupSocket(io);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
