let profile = require("../data/profile.json");

module.exports = (app) => {
  const getCurrentProfile = (req, res) => {
    res.json(profile);
  };
  app.get("/api/profile/", getCurrentProfile);
};
