const express = require('express');
const { postTweet, getTimeline } = require('../controllers/tweetControllers.js');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, postTweet);
router.get('/:userId/timeline', getTimeline);

module.exports = router;
