const express = require('express');
const eventController = require('../controllers/event_controller');

const router = express.Router();

router.post('/handle_event', eventController.handleEvent);

module.exports = router;
