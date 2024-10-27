// src/sockets/socketHandler.js
const Message = require('../models/messagesSchema');

/**
 * Sets up the socket event listeners.
 * @param {SocketIO.Server} io - The Socket.IO server instance.
 */
const setupSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('A client connected');

        // Load existing messages when the client connects
        Message.find({})
            .then((messages) => socket.emit('load messages', messages))
            .catch((err) => console.error('Failed to load messages:', err));

        // Listen for new messages from the client
        socket.on('chat message', (msg) => {
            const message = new Message(msg);
            message.save()
                .then(() => {
                    io.emit('chat message', msg); // Emit the new message to all clients
                })
                .catch((err) => console.error('Message saving failed:', err));
        });

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    });
};

module.exports = setupSocket;
