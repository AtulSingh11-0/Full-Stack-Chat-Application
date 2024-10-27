// src/routes/messages.js
const express = require('express');
const Message = require('../models/messagesSchema');

const router = express.Router();

/**
 * GET /api/messages - Retrieve all messages.
 * @route GET /api/messages
 * @returns {Array} - List of messages.
 */
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find({});
        res.json(messages);
    } catch (error) {
        res.status(500).send({ error: "Failed to load messages" });
    }
});

/**
 * POST /api/messages - Save a new message.
 * @route POST /api/messages
 * @param {string} author - The author of the message.
 * @param {string} content - The content of the message.
 * @returns {Object} - The saved message.
 */
router.post('/', async (req, res) => {
    const { author, content } = req.body;
    try {
        const newMessage = new Message({ author, content});
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).send({ error: "Message saving failed" });
    }
});

module.exports = router;
