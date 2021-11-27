const model = require("./tweet-model");

// const findAllTweets = () => {};
// const createTweet = (tweet) => {};
// const deleteTweet = (id) => {};
// const updateTweet = (id, tweet) => {};
const findAllTweets = () => model.find();

// const deleteMovie = (id) => model.deleteOne({ _id: id });

// const createMovie = (movie) => model.create(movie);

// const findMovieById = (id) => model.findById(id);

module.exports = {
  findAllTweets,
  // createTweet,
  // deleteTweet,
  // updateTweet,
};
