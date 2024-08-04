const Tweet = require('../models/tweet.js');

exports.postTweet = async (req, res) => {
  const { text } = req.body;
  try {
    const tweet = new Tweet({ userId: req.user.id, text });
    await tweet.save();
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getTimeline = async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
