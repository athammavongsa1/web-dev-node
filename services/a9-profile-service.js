const dao = require("../data/profile/profile-dao");
module.exports = (app) => {
  const findProfileById = (req, res) =>
    dao.findProfileById().then((profile) => res.json(profile));

  app.get("/api/rest/:id/profile", findProfileById);
};
