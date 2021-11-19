let profile = require("../data/profile.json");

module.exports = (app) => {
  const getProfile = (req, res) => {
    res.json(profile);
  };
  app.get("/api/profile/", getProfile);
};
