const dao = require("../data/tweets/tweet-dao");
module.exports = (app) => {
  const findAllTweets = (req, res) =>
    dao.findAllTweets().then((tweets) => res.json(tweets));

  app.get("/api/tweets/a9", findAllTweets);

  const postNewTweet = (req, res) => {
    console.log("postNewTweet: " + JSON.stringify(req.body));
    const newTweet = {
      topic: "Web Development",
      userName: "ReactJS",
      verified: false,
      handle: "ReactJS",
      time: "2h",
      "avatar-image": "../../../images/react-blue.png",
      "logo-image": "../../../images/react-blue.png",
      stats: {
        comments: 123,
        retweets: 234,
        likes: 345,
      },
      ...req.body,
    };
    dao.createTweet(newTweet).then((insertedTweet) => res.json(insertedTweet));
  };
  app.post("/api/tweets/a9", postNewTweet);

  const deleteTweet = (req, res) => {
    dao.deleteTweet(req.params.id).then((status) => res.send(status));
  };
  app.delete("/api/tweets/:id", deleteTweet);

  const likeTweet = (req, res) => {
    const id = req.params.id;
    const tweet = dao.findTweetById(id).then((tweet) => {
      if (tweet.liked === true) {
        console.log("tweet.liked === true");
        tweet.liked = false;
        tweet.stats.likes--;
      } else {
        console.log("tweet.liked === false");
        tweet.liked = true;
        tweet.stats.likes++;
      }
      dao.updateTweet(id, tweet).then((status) => res.send(status));
    });
  };
  app.put("/api/tweets/:id/like/a9", likeTweet);
};
