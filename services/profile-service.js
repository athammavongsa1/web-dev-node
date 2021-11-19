let profile = require("../data/profile.json");
//
module.exports = (app) => {
  const getCurrentProfile = (req, res) => {
    res.json(profile);
  };
  app.get("/api/profile/", getCurrentProfile);

  const updateCurrentProfile = (req, res) => {
    profile = {
      ...profile,
      website: req.body.website_,
      bio: req.body.bio_,
      location: req.body.location_,
      name: req.body.name_,
      handle: req.body.hand_,
      dateOfBirth: req.body.bday_,
    };
    res.json(profile);
    res.setStatus(200);
  };
  app.put("/api/profile", updateCurrentProfile);
};
