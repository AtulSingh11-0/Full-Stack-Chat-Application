// src/models/messagesSchema.js
const mongoose = require('mongoose');

/**
 * Message Schema for MongoDB using Mongoose.
 * @type {mongoose.Schema}
 */
const messageSchema = new mongoose.Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create a Message model based on the schema
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
